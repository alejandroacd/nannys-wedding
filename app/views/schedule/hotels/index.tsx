import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Montserrat, Great_Vibes } from "next/font/google";
import FadeInSection from "@/app/components/fade-in";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
})

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export function HotelsSection() {
    const { t } = useLanguage();
    return (
        <section className="flex flex-col p-6">
            <Separator className="my-5 w-1/2 bg-background-primary" />
            <FadeInSection>
                <h1 className={`text-5xl mb-12 md:text-7xl my-5 md:my-6 md:text-center font-bold text-primary ${greatVibes.className}`}>
                    {t("hotels_title")}
                </h1>
            </FadeInSection>

            <div className="flex flex-col gap-10">
                {/* Lawrenceburg, KY */}
                <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                    <FadeInSection>
                        <div className="flex flex-row gap-3 items-center">
                            <MapPin className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl">{t("in_word")} Lawrenceburg, KY</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <span className="text-muted-foreground">
                            {t("hotels_lawrenceburg")}
                        </span>
                    </FadeInSection>

                    <ul className="mt-3 space-y-2">
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/Ew378Ud", "_blank") }}>Best Western Lawrenceburg Inn</li>
                        </FadeInSection>
                    </ul>

                </section>

                {/* Georgetown, KY */}
                <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                    <FadeInSection>
                        <div className="flex flex-row gap-3 items-center">
                            <MapPin className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl">{t("in_word")} Georgetown, KY</p>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <span className="text-muted-foreground">
                            {t("hotels_georgetown")}
                        </span>

                    </FadeInSection>
                    <ul className="mt-3 space-y-7">
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/1KdAGnH", "_blank") }}>Best Western Plus Georgetown Corporate Center Hotel</li>
                        </FadeInSection>
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/ccpNQjF", "_blank") }}>Comfort Suites</li>
                        </FadeInSection>
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/SVG31qY", "_blank") }}>Country Inn & Suites by Radisson, Georgetown, KY</li>
                        </FadeInSection>
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/Mqi8A2E", "_blank") }}>Sleep Inn</li>
                        </FadeInSection>

                    </ul>

                </section>

                {/* Lexington, KY */}
                <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                    <FadeInSection>
                        <div className="flex flex-row gap-3 items-center">
                            <MapPin className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl">{t("in_word")} Lexington, KY</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <span className="text-muted-foreground">
                            {t("hotels_lexington")}
                        </span>
                    </FadeInSection>

                    <ul className="mt-3 space-y-7">
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/gwNF9AM", "_blank") }}>Clarion Hotel Conference Center - North</li>
                        </FadeInSection>
                        <FadeInSection>
                            <li onClick={() => { window.open("https://www.qilexington.com/", "_blank") }}>Quality Inn Lexington - Horse Park</li>
                        </FadeInSection>
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/Uiztd7A", "_blank") }}>Comfort Suites Keeneland</li>
                        </FadeInSection>
                    </ul>

                </section>

                {/* Louisville, KY */}
                <section className={`flex flex-col my-3 gap-3 ${montserrat.className}`}>
                    <FadeInSection>
                        <div className="flex flex-row gap-3 items-center">
                            <MapPin className="w-8 h-8 mb-1 inline-block text-primary" />
                            <p className="text-2xl">{t("in_word")} Louisville, KY</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <span className="text-muted-foreground">
                            {t("hotels_louisville")}
                        </span>
                    </FadeInSection>

                    <ul className="mt-3 space-y-7">
                        <FadeInSection>
                            <li onClick={() => { window.open("https://g.co/kgs/b8JcgvB", "_blank") }}>Budgetel Inn and Suites - Louisville</li>
                        </FadeInSection>
                    </ul>
                </section>
            </div>
        </section>
    );
}