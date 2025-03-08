import { Users, HeartHandshake, Camera, UtensilsCrossed, Music, Footprints } from "lucide-react"
import { Montserrat } from "next/font/google"
import FadeInSection from "../fade-in"
import { useLanguage } from "@/context/LanguageContext"
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })
export default function WeddingSchedule() {
    const { t } = useLanguage();
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-12">
        <FadeInSection>
  <ScheduleItem
    icon={<Users className="w-6 h-6" />}
    time="4:00 PM"
    title={t("hours_coming_title")}
    location="Entrada Principal"
    description={t("hours_coming_description")}
  />
</FadeInSection>
<FadeInSection>
  <ScheduleItem
    icon={<HeartHandshake className="w-6 h-6" />}
    time="4:30 PM"
    title={t("hours_ceremony_title")}
    location="Jardín Central"
    description={t("hours_ceremony_description")}
  />
</FadeInSection>
<FadeInSection>
  <ScheduleItem
    icon={<Camera className="w-6 h-6" />}
    time="5:15 PM"
    title={t("hours_pictures_title")}
    location="Terraza Panorámica"
    description={t("hours_pictures_description")}
  />
</FadeInSection>
<FadeInSection>
  <ScheduleItem
    icon={<UtensilsCrossed className="w-6 h-6" />}
    time="6:00 PM"
    title={t("hours_dinner_title")}
    location="Salón Principal"
    description={t("hours_dinner_description")}
  />
</FadeInSection>
<FadeInSection>
  <ScheduleItem
    icon={<Music className="w-6 h-6" />}
    time="7:30 PM"
    title={t("hours_party_title")}
    location="Salón de Baile"
    description={t("hours_party_description")}
  />
</FadeInSection>
<FadeInSection>
  <ScheduleItem
    icon={<Footprints className="w-6 h-6" />}
    time="10:30 PM"
    title={t("hours_dance_title")}
    location="Salón de Baile"
    description={t("hours_dance_description")}
  />
</FadeInSection>

        </div>
      </div>
    </section>
  )
}

function ScheduleItem({ icon, time, title, location, description }: any) {
  return (
    <div className={`${montserrat.className} flex items-start space-x-4`}>
      <div className="flex-shrink-0 w-12 h-12 bg-background-primary rounded-full flex items-center justify-center text-white">{icon}</div>
      <div className="flex-grow">
        <p className="text-primary font-semibold">{time}</p>
        <h3 className="text-xl  mt-1">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  )
}

