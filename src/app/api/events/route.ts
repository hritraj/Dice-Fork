import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

// GET - Fetch all events
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query = supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    // Apply category filter
    if (category && category !== 'All') {
      query = query.eq('category', category);
    }

    // Apply search filter
    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching events:', error);
      return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/events:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new event (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, time, location, description, maxAttendees, category, imageUrl } = body;

    // Validate required fields
    if (!title || !date || !time || !location || !description || !maxAttendees || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('events')
      .insert([
        {
          title,
          date,
          time,
          location,
          description,
          maxattendees: maxAttendees,
          category,
          imageUrl: imageUrl || null,
          attendees: 0,
          created_at: new Date().toISOString(),
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating event:', error);
      return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/events:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 