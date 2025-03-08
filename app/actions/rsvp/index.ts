"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

type RsvpData = {
  name: string
  email: string
  attending: "yes" | "no"
  guests?: string
  dietaryRestrictions?: string
  songRequest?: string
  message?: string
}

export async function submitRsvp(data: RsvpData) {
  try {
    const supabase = await createClient()

    // Insert the RSVP data into Supabase
    const { error } = await supabase.from("rsvps").insert([
      {
        name: data.name,
        email: data.email,
        attending: data.attending === "yes",
        guests: data.guests ? Number.parseInt(data.guests) : 1,
        dietary_restrictions: data.dietaryRestrictions || null,
        song_request: data.songRequest || null,
        message: data.message || null,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error inserting RSVP:", error)
      throw new Error("Failed to submit RSVP")
    }

    // Revalidate the page to show updated data if needed
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Error in submitRsvp:", error)
    throw error
  }
}

