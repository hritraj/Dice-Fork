import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into database
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        { 
          name: name.trim(), 
          email: email.trim().toLowerCase(), 
          subject: subject.trim(), 
          message: message.trim() 
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to save message' },
        { status: 500 }
      )
    }

    console.log('Contact message saved:', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you soon.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
} 