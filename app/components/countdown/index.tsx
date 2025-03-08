"use client"

import { useEffect, useState } from "react"
import { Heart, Clock, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import ConfettiEffect from "../confetti"

export default function WeddingCountdown() {
    const { t } = useLanguage()
    // Wedding date: May 3rd at 16:00 in Kentucky (Eastern Time)
    const weddingDate = new Date("2025-05-03T16:00:00-04:00")
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    function calculateTimeLeft() {
        const difference = weddingDate.getTime() - new Date().getTime()

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    if (!mounted) {
        return null // Prevent hydration mismatch
    }

    return (
        <ConfettiEffect>

            <div className="flex justify-center  my-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md"
                >

                    <div className="p-4 ">
                        <div className="flex flex-row gap-6 justify-center items-center mb-4">
                            <div className="flex items-center  gap-2 text-sm text-slate-700 ">
                                <Clock className="h-4 w-4" />
                                <span className="font-medium">4:00 PM</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-slate-700">
                                <MapPin className="h-4 w-4" />
                                <span className="font-medium">Kentucky, US</span>
                            </div>
                        </div>

                        <h2 className="text-xl text-center font-serif text-[#7f8563] mb-4">{t("countdown_title")} 💖</h2>

                        <div className="grid grid-cols-4 gap-2 mb-4">
                            {[
                                { label: `${t("countdown_days")}`, value: timeLeft.days },
                                { label: t("countdown_hours"), value: timeLeft.hours },
                                { label: t("countdown_minutes"), value: timeLeft.minutes },
                                { label: t("countdown_seconds"), value: timeLeft.seconds },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="flex flex-col items-center"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="bg-gradient-to-b from-[#7f8563]/10 to-slate-700/10 px-3 py-2 rounded-md shadow-sm border border-[#7f8563]/20 w-full text-center">
                                        <div className="text-xl font-bold text-[#7f8563]">{item.value}</div>
                                    </div>

                                    <div className="mt-1 text-xs font-medium text-slate-700 flex items-center gap-1">
                                        {item.label}
                                      
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center text-xs text-slate-500">
                            <p>{t("countdown_text")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </ConfettiEffect>

    )
}

