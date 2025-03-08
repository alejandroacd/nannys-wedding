'use client'
import dynamic from "next/dynamic"
import { useLanguage } from "@/context/LanguageContext"
import { Separator } from "@/components/ui/separator"
import { Montserrat, Great_Vibes } from "next/font/google"
import FadeInSection from "@/app/components/fade-in"
import { MapPin } from "lucide-react"
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
})
const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"]
})
export const WeddingPlace = () => {
    const { t } = useLanguage();
    return <section className="">
        <FadeInSection>
            <h1 className={`text-5xl md:text-7xl my-4 md:my-6 md:text-center font-bold text-primary ${greatVibes.className}`}>{t('the_place')}</h1>
        </FadeInSection>
        <section className={`${montserrat.className} p-3 items-center my-12 flex flex-col gap-5`}>
            <FadeInSection>

                <div className="flex flex-row gap-3">
                    <MapPin className="text-primary h-12 w-12" />
                    <p onClick={() => { window.open("https://www.theknot.com/marketplace/the-della-mae-luxury-weddings-and-event-venue-lawrenceburg-ky-2079739", "_blank") }} className="text-2xl">The Della Mae Luxury Weddings and Event Venue</p>
                </div>
            </FadeInSection>
            <FadeInSection>

                <span className="mx-10 text-muted-foreground">1173 Harry Wise Road, Lawrenceburg,
                    KY, 40342</span>
            </FadeInSection>

        </section>
        <FadeInSection>
            <div className="p-3">
                <Map />
            </div>
        </FadeInSection>

    </section>
}