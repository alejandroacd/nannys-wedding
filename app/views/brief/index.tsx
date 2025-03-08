import { SectionWrapper } from "@/app/components/section-wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Great_Vibes, Montserrat } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext"; // Adjust the import path as needed
import FadeInSection from "@/app/components/fade-in";

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

export const Brief = () => {
    const { t } = useLanguage(); // Use the hook to get the translation function

    return (
        <SectionWrapper>
            <FadeInSection>
                <Image src="/monograma.png" className="mx-auto" width={100} height={100} alt="monograma" />
            </FadeInSection>
            <FadeInSection>
                <h1 className={`text-5xl md:text-7xl ${greatVibes.className} text-center my-5 font-bold text-primary`}>
                    {t("brief_title")}
                </h1>
            </FadeInSection>

            <div className={`text-md leading-6 text-justify text-muted-foreground ${montserrat.className}`}>
                <FadeInSection>
                    <span
                    className="text-black"
                        style={{
                            fontFamily: greatVibes.style.fontFamily,
                            fontSize: "3rem",
                            float: "left",
                            marginRight: "0.5rem",
                        }}
                    >
                        {t("brief_description")[0]}
                    </span>
                    {t("brief_description").slice(1)}
                </FadeInSection>
                <br /><br />
                <FadeInSection>
                    <span dangerouslySetInnerHTML={{ __html: t("brief_details") }} />
                </FadeInSection>
                <br /><br />
                {t("brief_closing")}
                <br /><br />
                <div className="text-center my-5">
                    {t("brief_signature")}
                    <br />
                    <FadeInSection>
                        <span className={`text-primary ${greatVibes.className} my-5 text-2xl`}>
                            {t("brief_names")}
                        </span>
                    </FadeInSection>
                </div>
            </div>
            <Separator className="my-5 bg-background-primary" />
        </SectionWrapper>
    );
};