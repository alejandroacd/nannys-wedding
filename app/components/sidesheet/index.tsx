'use client'
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react"; // Import useRef

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export function SheetDemo() {
  const { t } = useLanguage();


  const handleNavigation = (href:any) => {
    // Close the sheet first
    const sheetCloseButton = document.querySelector('[data-state="open"]');
    if (sheetCloseButton) {
      (sheetCloseButton as HTMLElement).click(); // Simulate a click to close the sheet
    }

    // Use a timeout to wait for the sheet to close before scrolling
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Adjust the delay to match the sheet's closing animation duration
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="fixed z-50 right-3 top-3  z-[20]">
        <Button className="text-white z-50 font-bold">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto p-6">
        <SheetHeader>
          <Image
            src="/monograma.png"
            className="mx-auto"
            alt="logo"
            width={100}
            height={100}
          />
          <SheetTitle></SheetTitle>
          <SheetDescription>{t("menu_description")}</SheetDescription>
        </SheetHeader>
        <section className="my-12 text-primary">
          <ul className={`${montserrat.className} flex uppercase text-sm tracking-wide flex-col gap-3`}>
            <li>
              <SheetClose asChild>
                <a href="#our-story" onClick={(e) => { e.preventDefault(); handleNavigation('#our-story'); }}>
                  {t("our_story_title")}
                </a>
              </SheetClose>
            </li>
            <Separator className="text-primary my-3" />
            <li>
              <SheetClose asChild>
                <a href="#the-place" onClick={(e) => { e.preventDefault(); handleNavigation('#the-place'); }}>
                  {t("menu_the_place")}
                </a>
              </SheetClose>
            </li>
            <Separator className="text-primary my-3" />
            <li>
              <SheetClose asChild>
                <a href="#hours" onClick={(e) => { e.preventDefault(); handleNavigation('#hours'); }}>
                  {t("menu_hours")}
                </a>
              </SheetClose>
            </li>
            <Separator className="text-primary my-3" />
            <li>
              <SheetClose asChild>
                <a href="#airports" onClick={(e) => { e.preventDefault(); handleNavigation('#airports'); }}>
                  {t("menu_airports")}
                </a>
              </SheetClose>
            </li>
            <Separator className="text-primary my-3" />
            <li>
              <SheetClose asChild>
                <a href="#hotels" onClick={(e) => { e.preventDefault(); handleNavigation('#hotels'); }}>
                  {t("menu_hotels")}
                </a>
              </SheetClose>
            </li>
            <Separator className="text-primary my-3" />
            <li>
              <SheetClose asChild>
                <a href="#dresscode" onClick={(e) => { e.preventDefault(); handleNavigation('#dresscode'); }}>
                  {t("menu_dresscode")}
                </a>
              </SheetClose>
            </li>
            <Separator className="text-primary my-3" />
            <li>
              <SheetClose asChild>
                <a href="#gifts" onClick={(e) => { e.preventDefault(); handleNavigation('#gifts'); }}>
                  {t("menu_gifts")}
                </a>
              </SheetClose>
            </li>          
            <Separator className="text-primary my-3" />
            <li className="font-bold">
              <SheetClose asChild>
                <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavigation('#faq'); }}>
                  {t("menu_faq")}
                </a>
              </SheetClose>
            </li>
          </ul>
        </section>
      </SheetContent>
    </Sheet>
  );
}