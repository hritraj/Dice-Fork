import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Test 1: Check if events table exists and has data
    const { data: events, error: eventsError } = await supabase
      .from('events')
      .select('*')
      .limit(1);

    // Test 2: Check if event_registrations table exists
    const { data: registrations, error: registrationsError } = await supabase
      .from('event_registrations')
      .select('*')
      .limit(1);

    return NextResponse.json({
      events: {
        exists: !eventsError,
        count: events?.length || 0,
        error: eventsError?.message
      },
      registrations: {
        exists: !registrationsError,
        count: registrations?.length || 0,
        error: registrationsError?.message
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      error: 'Database test failed',
      details: error.message
    }, { status: 500 });
  }
} 