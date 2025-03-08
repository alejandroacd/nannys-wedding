import { Users, HeartHandshake, Camera, UtensilsCrossed, Music, Footprints } from "lucide-react";
import { Montserrat } from "next/font/google";
import FadeInSection from "../fade-in";
import { useLanguage } from "@/context/LanguageContext";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function WeddingSchedule() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary"
              aria-hidden="true"
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <FadeInSection>
                <TimelineItem
                  icon={<Users className="w-6 h-6" />}
                  time="4:00 PM"
                  title={t("hours_coming_title")}
                  description={t("hours_coming_description")}
                />
              </FadeInSection>
              <FadeInSection>
                <TimelineItem
                  icon={<HeartHandshake className="w-6 h-6" />}
                  time="4:30 PM"
                  title={t("hours_ceremony_title")}
                  description={t("hours_ceremony_description")}
                />
              </FadeInSection>
              <FadeInSection>
                <TimelineItem
                  icon={<Camera className="w-6 h-6" />}
                  time="5:15 PM"
                  title={t("hours_pictures_title")}
                  description={t("hours_pictures_description")}
                />
              </FadeInSection>
              <FadeInSection>
                <TimelineItem
                  icon={<UtensilsCrossed className="w-6 h-6" />}
                  time="6:00 PM"
                  title={t("hours_dinner_title")}
                  description={t("hours_dinner_description")}
                />
              </FadeInSection>
              <FadeInSection>
                <TimelineItem
                  icon={<Music className="w-6 h-6" />}
                  time="7:30 PM"
                  title={t("hours_party_title")}
                  description={t("hours_party_description")}
                />
              </FadeInSection>
              <FadeInSection>
                <TimelineItem
                  icon={<Footprints className="w-6 h-6" />}
                  time="10:30 PM"
                  title={t("hours_dance_title")}
                  description={t("hours_dance_description")}
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ icon, time, title, description }: any) {
  return (
    <FadeInSection>
      <div className={`${montserrat.className} flex items-start space-x-4`}>
        <div className="flex-shrink-0 w-12 h-12 bg-background-primary rounded-full flex items-center justify-center text-white z-10">
          {icon}
        </div>
        <div className="flex-grow">
          <p className="text-primary font-semibold">{time}</p>
          <h3 className="text-xl mt-1">{title}</h3>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    </FadeInSection>

  );
}