import { Link } from "lucide-react";
import { Great_Vibes, Montserrat } from "next/font/google";
import FadeInSection from "@/app/components/fade-in";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SectionWrapper } from "@/app/components/section-wrapper";

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

export default function DressCode() {
    const { t } = useLanguage();

    return (
        <section id="dresscode" className="p-4 md:w-1/2 md:mx-auto py-12">
            <section className="mx-auto flex flex-col p-5">
                <Separator className="my-1 text-primary bg-background-primary" />
                <Image src="/monograma.png" className="mx-auto my-6" alt="logo" width={100} height={100} />
                <FadeInSection>
                    <h1 className={`text-5xl md:text-7xl ${greatVibes.className} md:text-center my-5 text-primary font-bold`}>
                        {t("menu_dresscode")}
                    </h1>
                </FadeInSection>

                <FadeInSection>
                    <p className={`${montserrat.className} mt-6 text-md leading-6 text-justify text-muted-foreground font-bold`}>
                        <span
                            style={{
                                fontFamily: greatVibes.style.fontFamily,
                                fontSize: "3rem",
                                float: "left",
                                marginRight: "0.5rem",
                            }}
                            className="text-black"
                        >
                            {t("dress_code_title")[0]}
                        </span>
                        {t("dress_code_title").slice(1)} 💃🏻
                        <br />
                        <br />
                        {t("dress_code_text")}
                        <br />
                        <br />
                        {t("dress_code_final_text")}
                        <br />
                        <br />
                        {t("dresscode_description")}
                        <br />
                        <br />
                        <a className="text-primary" href={t("dresscode_link")}>
                            <Link className="w-6 h-6 inline-block" /> Go to link
                        </a>
                    </p>
                </FadeInSection>
            </section>
        </section>
    );
}