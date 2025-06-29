import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../../lib/supabase';

// GET - Fetch user registrations
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('event_registrations')
      .select('event_id')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching user registrations:', error);
      return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ 
        error: 'Internal server error', 
        details: error.message 
      }, { status: 500 });
    }
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: 'Unknown error' 
    }, { status: 500 });
  }
}

// POST - Register for an event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, userId } = body;

    if (!eventId || !userId) {
      return NextResponse.json({ error: 'Missing eventId or userId' }, { status: 400 });
    }

    // First, let's check if the event exists
    const { data: eventCheck, error: eventCheckError } = await supabase
      .from('events')
      .select('id, attendees, maxattendees')
      .eq('id', eventId)
      .single();

    if (eventCheckError) {
      console.error('Error checking if event exists:', eventCheckError);
      return NextResponse.json({ 
        error: 'Event not found or database error', 
        details: eventCheckError.message 
      }, { status: 500 });
    }

    if (!eventCheck) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Check if user is already registered
    const { data: existingRegistration, error: checkError } = await supabase
      .from('event_registrations')
      .select('*')
      .eq('event_id', eventId)
      .eq('user_id', userId)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking registration:', checkError);
      return NextResponse.json({ 
        error: 'Failed to check registration', 
        details: checkError.message 
      }, { status: 500 });
    }

    if (existingRegistration) {
      return NextResponse.json({ error: 'Already registered for this event' }, { status: 400 });
    }

    // Check if event is full
    if (eventCheck.attendees >= eventCheck.maxattendees) {
      return NextResponse.json({ error: 'Event is full' }, { status: 400 });
    }

    // Register user for event
    const { data: registration, error: registerError } = await supabase
      .from('event_registrations')
      .insert([
        {
          event_id: eventId,
          user_id: userId,
          registered_at: new Date().toISOString(),
        }
      ])
      .select()
      .single();

    if (registerError) {
      console.error('Error registering for event:', registerError);
      return NextResponse.json({ 
        error: 'Failed to register for event', 
        details: registerError.message 
      }, { status: 500 });
    }

    // Update event attendees count
    const { error: updateError } = await supabase
      .from('events')
      .update({ attendees: eventCheck.attendees + 1 })
      .eq('id', eventId);

    if (updateError) {
      console.error('Error updating event attendees:', updateError);
      // Don't fail the registration if attendee count update fails
    }

    return NextResponse.json(registration, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ 
        error: 'Internal server error', 
        details: error.message 
      }, { status: 500 });
    }
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: 'Unknown error' 
    }, { status: 500 });
  }
}

// DELETE - Unregister from an event
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get('eventId');
    const userId = searchParams.get('userId');

    if (!eventId || !userId) {
      return NextResponse.json({ error: 'Missing eventId or userId' }, { status: 400 });
    }

    // Delete registration
    const { error: deleteError } = await supabase
      .from('event_registrations')
      .delete()
      .eq('event_id', eventId)
      .eq('user_id', userId);

    if (deleteError) {
      console.error('Error unregistering from event:', deleteError);
      return NextResponse.json({ error: 'Failed to unregister from event' }, { status: 500 });
    }

    // Update event attendees count
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('attendees')
      .eq('id', eventId)
      .single();

    if (!eventError && event) {
      const { error: updateError } = await supabase
        .from('events')
        .update({ attendees: Math.max(0, event.attendees - 1) })
        .eq('id', eventId);

      if (updateError) {
        console.error('Error updating event attendees:', updateError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ 
        error: 'Internal server error', 
        details: error.message 
      }, { status: 500 });
    }
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: 'Unknown error' 
    }, { status: 500 });
  }
} 