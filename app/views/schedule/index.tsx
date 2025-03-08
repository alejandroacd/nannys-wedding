'use client'
import { SectionWrapper } from "@/app/components/section-wrapper"
import { Separator } from "@/components/ui/separator"
import { WeddingPlace } from "./wedding-place"
import Image from "next/image"
import { Hours } from "./hours"
import { Airports } from "./airports"
import { Hotel } from "lucide-react"
import { HotelsSection } from "./hotels"
export const Schedule = () => {
    return <SectionWrapper>
        <Separator className="my-5  bg-background-primary"/>
       <Image src="/monograma.png" className="mx-auto" width={100} height={100} alt="monograma" />
        <section className="flex   md:mx-auto flex-col gap-12">
            <WeddingPlace />
            <Hours />
            <Airports />
            <HotelsSection />
        </section>
    </SectionWrapper>
}