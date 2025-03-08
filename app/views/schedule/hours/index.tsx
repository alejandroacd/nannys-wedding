import { CalendarDays } from "lucide-react"
import { Great_Vibes, Montserrat } from "next/font/google"
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
})
const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"]
})
import { useLanguage } from "@/context/LanguageContext"
import { Separator } from "@/components/ui/separator"
import WeddingSchedule from "@/app/components/hours"
import WeddingCountdown from "@/app/components/countdown"
export const Hours = () => {
    const { t } = useLanguage();
    return <section id="hours" className="flex flex-col gap-5">
        <Separator className="my-5 w-full bg-background-primary" />
        <h1 className={`text-5xl md:text-7xl my-3  p-6  md:my-6 md:text-center font-bold text-primary ${greatVibes.className}`}>{t("schedule")}</h1>
        <div className="flex items-center flex-row justify-center  p-6 gap-4">
            <CalendarDays className="w-8 h-8 mb-1 inline-block text-primary" />
            <p className={`${montserrat.className} text-2xl font-bold`}>{t("schedule_date")}</p>
        </div>
        <WeddingCountdown />
        <WeddingSchedule />
    </section>
}