import { Separator } from "@/components/ui/separator"
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
import { Plane } from "lucide-react"
import FadeInSection from "@/app/components/fade-in"
export const Airports = () => {
    const { t } = useLanguage();
    return (
        <section className="flex flex-col p-6">
            <Separator className="my-5 w-1/2 bg-background-primary" />
            <FadeInSection>
                <h1 className={`text-5xl mb-12 md:text-7xl my-4 md:my-6 md:text-center font-bold text-primary ${greatVibes.className}`}>{t("airports_title")}</h1>
            </FadeInSection>
            <div className="flex flex-col gap-10">
                <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                    <FadeInSection>
                        <div className="flex flex-row gap-3 items-center">
                            <Plane className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl ">Blue Grass Airport</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <span className="text-muted-foreground">Lexington, KY {t("blue_grass_airport_description")} </span>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="w-full mt-5 text-sm flex justify-end">
                            <span onClick={() => { window.open("https://g.co/kgs/ZvhbVwc", "_blank") }}>{t("view_in_maps")}</span>
                        </div>
                    </FadeInSection>
                </section>
                <FadeInSection>
                    <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                        <div className="flex flex-row gap-3 items-center">
                            <Plane className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl ">Louisville International Airport</p>
                        </div>
                        <span className="text-muted-foreground">Louisville, KY {t("louisville_airport_description")} </span>
                        <div className="w-full mt-5 text-sm flex justify-end">
                            <span onClick={() => { window.open("https://g.co/kgs/bHn7jKK", "_blank") }}>{t("view_in_maps")}</span>
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                        <div className="flex flex-row gap-3 items-center">
                            <Plane className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl ">Cincinnati International Airport</p>
                        </div>
                        <span className="text-muted-foreground">Cincinnati, KY {t("cincinnati_airport_description")} </span>
                        <div className="w-full mt-5 text-sm flex justify-end">
                            <span onClick={() => { window.open("https://g.co/kgs/1oe8iDN", "_blank") }}> {t("view_in_maps")}</span>
                        </div>
                    </section>
                </FadeInSection>

            </div>
        </section>
    )
}