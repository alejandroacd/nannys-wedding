import Image from "next/image";
import { Montserrat, Great_Vibes } from "next/font/google";
import FadeInSection from "@/app/components/fade-in";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const Histories = ({ img, title, text, name }: any) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <FadeInSection>
        <Image
          loading="lazy"
          src={img}
          className="rounded-sm w-full h-auto md:max-w-[500px] mx-auto"
          width={500}
          height={500}
          alt="foto"
        />
      </FadeInSection>
      <section className="flex flex-col gap-6">
        <FadeInSection>
          <h1 className={`${greatVibes.className} text-5xl text-center font-bold text-black`}>
            {title}
          </h1>
        </FadeInSection>
        <FadeInSection>
          <p
            className={`text-center ${montserrat.className} text-justify text-muted-foreground text-md leading-7`}
            style={{
              fontFamily: montserrat.style.fontFamily,
            }}
          >
            <span
            className="text-black"
              style={{
                fontFamily: greatVibes.style.fontFamily,
                fontSize: "3rem",
                float: "left",
                marginRight: "0.5rem",
              }}
            >
              {text[0]}
            </span>
            {text.slice(1)}
          </p>
        </FadeInSection>
        <div className="w-full flex justify-end mb-5">
          <FadeInSection>
            <p className={`text-right text-3xl font-bold text-primary ${greatVibes.className}`}>
              - {name}
            </p>
          </FadeInSection>
        </div>
      </section>
    </section>
  );
};