"use client"
import FadeInSection from "@/app/components/fade-in";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image";
export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto py-16 px-4">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;500;600&display=swap');
      `}</style>
      <Separator className="my-8 bg-background-primary my-5" />
      <FadeInSection>
        <Image src="/monograma.png" className="mx-auto" width={100} height={100} alt="monograma" />
      </FadeInSection>
      <FadeInSection>
        <h2 className="text-5xl md:text-6xl text-center mb-12" style={{ fontFamily: "'Great Vibes', cursive" }}>
          {t("menu_faq")}
        </h2>
      </FadeInSection>


      <div className="space-y-6 p-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <Accordion type="single" collapsible className="w-full">
          <FadeInSection>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-left">
                1. {t("question_1")}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <div dangerouslySetInnerHTML={{ __html: t("answer_1") }} />
              </AccordionContent>
            </AccordionItem>
          </FadeInSection>
          <FadeInSection>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-left">
                2. {t("question_2")}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <div dangerouslySetInnerHTML={{ __html: t("answer_2") }} />
              </AccordionContent>
            </AccordionItem>
          </FadeInSection>
          <FadeInSection>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium text-left">
              3. {t("question_3")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_3") }} />
            </AccordionContent>
          </AccordionItem>
          </FadeInSection>
          <FadeInSection>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium text-left">
              4. {t("question_4")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_4") }} />
            </AccordionContent>
          </AccordionItem>

          </FadeInSection>
        <FadeInSection>
        <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium text-left">
              5. {t("question_5")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_5") }} />
            </AccordionContent>
          </AccordionItem>
        </FadeInSection>

        <FadeInSection>
        <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium text-left">
              6. {t("question_6")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_6") }} />
            </AccordionContent>
          </AccordionItem>

        </FadeInSection>
       <FadeInSection>
       <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium text-left">
              7. {t("question_7")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_7") }} />
            </AccordionContent>
          </AccordionItem>

       </FadeInSection>
       <FadeInSection>
       <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium text-left">
              8. {t("question_8")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_8") }} />
            </AccordionContent>
          </AccordionItem>
       </FadeInSection>

       <FadeInSection>
       <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-medium text-left">
              9. {t("question_9")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_9") }} />
            </AccordionContent>
          </AccordionItem>
       </FadeInSection>

      <FadeInSection>
      <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-medium text-left">
              10. {t("question_10")}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: t("answer_10") }} />
            </AccordionContent>
          </AccordionItem>
      </FadeInSection>
        </Accordion>
      </div>
    </section>
  )
}