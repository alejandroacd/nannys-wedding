import { SectionWrapper } from "@/app/components/section-wrapper";
import { Great_Vibes, Montserrat } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import RegistrySection from "@/app/components/wishlist";
import FadeInSection from "@/app/components/fade-in";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"],
});

export const Gifts = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper>
            <section className="p-4" id="gifts">
                <Separator className="my-1 text-primary bg-background-primary" />
                <FadeInSection>
                    <Image src="/monograma.png" className="mx-auto my-6" alt="logo" width={100} height={100} />
                </FadeInSection>
                <FadeInSection>
                    <h1 className={`text-5xl md:text-7xl my-6 md:my-6 md:text-center font-bold text-primary ${greatVibes.className}`}>
                        {t("gifts_title")}
                    </h1>
                </FadeInSection>
                <FadeInSection>
                    <p className={`text-md my-12 leading-7 text-justify text-muted-foreground ${montserrat.className}`}>
                        <span
                            style={{
                                fontFamily: greatVibes.style.fontFamily,
                                fontSize: "3rem",
                                float: "left",
                                marginRight: "0.5rem",
                            }}
                            className="text-black"
                        >
                            {t("gifts_description")[0]}
                        </span>
                        {t("gifts_description").slice(1)}
                    </p>
                </FadeInSection>
                <FadeInSection>
                    <RegistrySection />
                </FadeInSection>
            </section>
        </SectionWrapper>
    );
};