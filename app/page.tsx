'use client'
import Image from "next/image";
import { Montserrat, Great_Vibes } from "next/font/google";
import { OurStory } from "./views/our-story";
import { Schedule } from "./views/schedule";
import DressCode from "./views/dresscode";
import { Gifts } from "./views/gifts";
import { Toaster } from "sonner";
import FAQSection from "./views/faq";
import FadeInSection from "./components/fade-in";
import { useLanguage } from "@/context/LanguageContext";
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
})
export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/EM2.jpg')" }}>
        <div className="absolute  bg-black/55 z-0 w-full h-full"></div>
        <FadeInSection>
        <Image src="/monograma.png" className="mx-auto z-50 invert" width={100} height={100} alt="monograma" />
        </FadeInSection>
        <FadeInSection>
        <div className={`${greatVibes.className}  z-50 flex justify-between h-[61vh] md:h-[72vh] items-center flex-col`}>
         <section className="flex items-center flex-col">
         <p className="text-white z-50 text-5xl md:text-7xl">Evagianny</p>
          <p className="text-white z-50 text-5xl md:text-7xl">&</p>
          <p className="text-white z-50 text-5xl md:text-7xl">Mitchell</p>
         </section>
        </div>
        </FadeInSection>
        <div className={`w-3/4 relative mx-auto ${montserrat.className}`}>
        <p className="text-white z-50 text-[18px]  text-center">{t("landing_text")}</p>
        </div>
      </div>
      <OurStory />
      <Schedule />
      <DressCode />
      <Gifts />
      <FAQSection />
    </>
  );
}
