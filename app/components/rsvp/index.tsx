"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Montserrat } from "next/font/google"
import { Heart, CalendarHeart, Utensils, Music } from "lucide-react"
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { submitRsvp } from "@/app/actions/rsvp"
import { cn } from "@/lib/utils"
import WeddingCountdown from "../countdown"


const montserrat = Montserrat({ subsets: ["latin"] })

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  attending: z.enum(["yes", "no"], {
    required_error: "Please select if you're attending",
  }),
  guests: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  songRequest: z.string().optional(),
  message: z.string().optional(),
})

export function RsvpDialog() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { t } = useLanguage()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      guests: "",
      dietaryRestrictions: "",
      songRequest: "",
      message: "",
    },
  })


  function heartConfetti() {
    const heart = "❤️"; // Unicode heart emojimx-auto
    const defaults = {
      origin: { y: 0.6 }, // Start from the bottom of the screen
      colors: ["#FF1493", "#FF69B4", "#FFC0CB"], // Pink colors for hearts
      scalar: 2, // Scale up the hearts
    };

    function fire({particleRatio, opts}: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: 75,
        shapes: ["circle"], // Use circles as the base shape
        shapeOptions: {
          text: {
            value: heart, // Use the heart emoji
          },
        },
      });
    }

    // Fire the confetti
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await submitRsvp(values); // Submit the form data
      setIsSuccess(true); // Set success state
      form.reset(); // Reset the form
      heartConfetti();
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    form.reset()
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen)
        if (!newOpen) {
          setTimeout(() => {
            resetForm()
          }, 300)
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          className={`shadow-sm shadow-[#7f8563] mt-4 bg-[#7f8563] hover:bg-[#6a7152] font-bold uppercase tracking-tighter ${montserrat.className}`}
        >
          {t('landing_button')} 💗
        </Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[480px] min-h-[80vh] max-h-screen   overflow-y-scroll bg-white rounded-lg  ${montserrat.className}`}>
        <DialogHeader></DialogHeader>

        {!isSuccess ? (
          <>
            <DialogHeader className="pt-6  px-6 relative">
              <div className="absolute -top-1 -left-1 w-20 h-20 text-[#7f8563] opacity-10">
                <Heart className="w-full h-full" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 text-[#7f8563] opacity-10">
                <Heart className="w-full h-full" />
              </div>
              <DialogTitle className={cn("text-center text-2xl font-bold text-[#7f8563]", montserrat.className)}>
                RSVP
              </DialogTitle>
              <DialogDescription className="text-center">
                {t("rsvp_form_description")}
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 py-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <Heart className="h-3.5 w-3.5 text-[#7f8563]" />
                          {t("rsvp_form_name")}
                        </FormLabel>
                        <FormControl>
                          <Input  {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <CalendarHeart className="h-3.5 w-3.5 text-[#7f8563]" />
                          {t("rsvp_form_email")}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="email@...." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attending"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>{t("rsvp_form_attend")}</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" id="attending-yes" />
                              </FormControl>
                              <FormLabel htmlFor="attending-yes" className="font-normal cursor-pointer">
                                {t("rsvp_form_attend_accept")}
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" id="attending-no" />
                              </FormControl>
                              <FormLabel htmlFor="attending-no" className="font-normal cursor-pointer">
                                {t("rsvp_form_attend_decline")}
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <Heart className="h-3.5 w-3.5 text-[#7f8563]" />
                          {t("rsvp_form_guests")}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="1" {...field} />
                        </FormControl>
                        <FormDescription>{t("rsvp_form_guests_placeholder")}</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dietaryRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <Utensils className="h-3.5 w-3.5 text-[#7f8563]" />
                          {t("rsvp_form_dietary")}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("rsvp_form_dietary_placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="songRequest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <Music className="h-3.5 w-3.5 text-[#7f8563]" />
                          {t("rsvp_form_song_request")}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("rsvp_form_song_placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <Heart className="h-3.5 w-3.5 text-[#7f8563]" />
                          {t("rsvp_form_message")}
                        </FormLabel>
                        <FormControl>
                          <Textarea className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DialogFooter className="pt-2">
                    <Button type="submit" className="w-full bg-[#7f8563] hover:bg-[#6a7152]" disabled={isSubmitting}>
                      {isSubmitting ? `${t("rsvp_form_sending_button")}...` : `${t("rsvp_form_send_button")}`}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </div>          <DialogHeader></DialogHeader>

          </>
        ) : (
          <div className="p-6 flex flex-col items-center justify-center min-h-[300px]">
            <DialogHeader></DialogHeader>
            <div className="relative w-20 h-20 mb-4">
              <Heart className="w-full h-full text-[#7f8563] animate-pulse" fill="#7f8563" />
            </div>
            <h3 className={cn("text-xl font-bold text-[#7f8563] mb-2", montserrat.className)}>{t("rsvp_form_thanks")}</h3>
            <p className="text-center text-gray-600 mb-6">
              {t("rsvp_form_thanks_text")}
            </p>
            <WeddingCountdown />
            <Button onClick={() => setOpen(false)} className="bg-[#7f8563] hover:bg-[#6a7152]">
              {t("rsvp_form_cancel_button")}
            </Button>
          </div>
        )}

        <DialogHeader></DialogHeader>

      </DialogContent>
    </Dialog>
  )
}
