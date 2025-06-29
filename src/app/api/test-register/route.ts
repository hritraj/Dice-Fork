import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, userId } = body;

    // Step 1: Check if event exists
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('id, attendees, maxattendees')
      .eq('id', eventId)
      .single();

    if (eventError) {
      return NextResponse.json({ 
        step: 'event_check',
        error: eventError.message,
        code: eventError.code
      }, { status: 500 });
    }

    // Step 2: Check if user is already registered
    const { data: existingReg, error: checkError } = await supabase
      .from('event_registrations')
      .select('*')
      .eq('event_id', eventId)
      .eq('user_id', userId)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      return NextResponse.json({ 
        step: 'check_registration',
        error: checkError.message,
        code: checkError.code
      }, { status: 500 });
    }

    if (existingReg) {
      return NextResponse.json({ 
        step: 'already_registered',
        message: 'User already registered for this event'
      });
    }

    // Step 3: Try to insert registration
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
      return NextResponse.json({ 
        step: 'registration',
        error: registerError.message,
        code: registerError.code,
        details: registerError.details,
        hint: registerError.hint
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      registration 
    });

  } catch (error: any) {
    return NextResponse.json({
      error: 'Test failed',
      details: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 