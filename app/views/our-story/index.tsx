'use client'
import { SectionWrapper } from "@/app/components/section-wrapper"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { Montserrat, Great_Vibes } from "next/font/google"
import FadeInSection from "@/app/components/fade-in"
import { Histories } from "./histories"
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
})
const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"],
})
export const OurStory = () => {
    const { t } = useLanguage();
    return <section id="our-story">

        <SectionWrapper>
            <FadeInSection>
                <Image src="/monograma.png" className="mx-auto" width={100} height={100} alt="monograma" />
            </FadeInSection>
            <FadeInSection>
                <h1 className={`text-5xl md:text-7xl  ${greatVibes.className} md:text-center my-5 text-center font-bold text-primary ${greatVibes.className}`}>
                    {t("our_story_title")}
                </h1>
            </FadeInSection>
            <Separator className="my-5 w-1/2 bg-background-primary" />
            <section className="flex flex-col gap-[100px]">
                <Histories img={"/nanngibel.jpg"} name="Evagianny Contreras" text={t('our_story_girlfriendStory')} title={t('our_story_girlfriend')} />
                <Histories name="Mitchell Solace" img={"/mitchell.jpg"} text={t('our_story_boyfriendStory')} title={t('our_story_boyfriend')} />
                <Histories name="Evagianny & Mitchell" img={"/us.jpg"} text={t('our_story_brief')} title={t('our_story_us')} />
            </section>

        </SectionWrapper>
    </section>

}