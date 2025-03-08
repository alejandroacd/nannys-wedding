import { Separator } from "@/components/ui/separator";
import { Great_Vibes, Montserrat } from "next/font/google";
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});
const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"],
});
import { useLanguage } from "@/context/LanguageContext";
import { Plane } from "lucide-react";
import FadeInSection from "@/app/components/fade-in";

export const Airports = () => {
    const { t } = useLanguage();
    return (
        <section className="flex flex-col p-6" id="airports">
            <Separator className="my-5 w-1/2 bg-background-primary" />
            <FadeInSection>
                <h1 className={`text-5xl mb-12 md:text-7xl my-4 md:my-6 md:text-center font-bold text-primary ${greatVibes.className}`}>
                    {t("airports_title")}
                </h1>
            </FadeInSection>
            <div className="flex flex-col gap-10">
                {/* Blue Grass Airport */}
                <FadeInSection>
                    <section className={`grid grid-cols-[auto_1fr] items-center gap-3 ${montserrat.className}`}>
                        <Plane className="w-8 h-8 text-primary" />
                        <p className="text-2xl">Blue Grass Airport</p>
                        <span className="col-span-2 text-muted-foreground">Lexington, KY {t("blue_grass_airport_description")}</span>
                        <div className="col-span-2 w-full mt-5 text-sm flex justify-end">
                            <span onClick={() => { window.open("https://g.co/kgs/ZvhbVwc", "_blank") }}>{t("view_in_maps")}</span>
                        </div>
                    </section>
                </FadeInSection>

                {/* Louisville International Airport */}
                <FadeInSection>
                    <section className={`grid grid-cols-[auto_1fr] items-center gap-3 ${montserrat.className}`}>
                        <Plane className="w-8 h-8 text-primary" />
                        <p className="text-2xl">Louisville International Airport</p>
                        <span className="col-span-2 text-muted-foreground">Louisville, KY {t("louisville_airport_description")}</span>
                        <div className="col-span-2 w-full mt-5 text-sm flex justify-end">
                            <span onClick={() => { window.open("https://g.co/kgs/bHn7jKK", "_blank") }}>{t("view_in_maps")}</span>
                        </div>
                    </section>
                </FadeInSection>

                {/* Cincinnati International Airport */}
                <FadeInSection>
                    <section className={`grid grid-cols-[auto_1fr] items-center gap-3 ${montserrat.className}`}>
                        <Plane className="w-8 h-8 text-primary" />
                        <p className="text-2xl">Cincinnati International Airport</p>
                        <span className="col-span-2 text-muted-foreground">Cincinnati, KY {t("cincinnati_airport_description")}</span>
                        <div className="col-span-2 w-full mt-5 text-sm flex justify-end">
                            <span onClick={() => { window.open("https://g.co/kgs/1oe8iDN", "_blank") }}>{t("view_in_maps")}</span>
                        </div>
                    </section>
                </FadeInSection>
            </div>
        </section>
    );
};