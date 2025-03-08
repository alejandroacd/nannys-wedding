"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Gift, Heart, Plane, ShoppingBag } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/context/LanguageContext"

export default function RegistrySection() {
    const [copied, setCopied] = useState<string | null>(null)
    const { t } = useLanguage()

    // Replace with actual contact information
    const contactInfo = {
        bride: {
            name: "Evagianny Contreras",
            email: "evagianny.mcd@gmail.com",
            phone: "5025917645",
        },
        groom: {
            name: "Mitchell Solace",
            email: "msolace81@gmail.com",
            phone: "8592856551",
        },
        amazonRegistry: "https://www.amazon.com/wedding/registry/IQ0FY4UNTK1B",
    }

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text)
        setCopied(type)
        toast.success(t("copy_clipboard"), {
            description: t("copy_clipboard_text"),
            duration: 3000,
        })

        setTimeout(() => {
            setCopied(null)
        }, 3000)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Tabs defaultValue="zelle" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="zelle" className="text-sm sm:text-base">
                        <ShoppingBag className="mr-2 h-4 w-4" /> Zelle
                    </TabsTrigger>
                    <TabsTrigger value="registry" className="text-sm sm:text-base">
                        <Gift className=" h-4 w-4" /> {t("gifts_wishlist_tab")}
                    </TabsTrigger>

                </TabsList>

                <TabsContent value="honeymoon" className="space-y-4">
                    <Card>
                        <CardHeader className="pb-4">
                            <CardTitle className="text-center">Fondo para Luna de Miel</CardTitle>
                            <CardDescription className="text-center">
                                Ayúdanos a crear recuerdos inolvidables en nuestra luna de miel
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <div className="relative w-full max-w-md h-64 mb-6 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-200 flex items-center justify-center">
                                    <Plane className="h-24 w-24 text-rose-500" />
                                </div>
                            </div>
                            <p className="text-center mb-4">
                                Tu contribución nos ayudará a disfrutar de experiencias únicas durante nuestro viaje de luna de miel.
                                Puedes enviar tu regalo a través de Zelle usando la información de contacto a continuación.
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => copyToClipboard(contactInfo.bride.email, "brideEmail")}
                                >
                                    <Copy className="mr-2 h-4 w-4" />
                                    {copied === "brideEmail" ? "¡Copiado!" : `Email: ${contactInfo.bride.email}`}
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => copyToClipboard(contactInfo.groom.email, "groomEmail")}
                                >
                                    <Copy className="mr-2 h-4 w-4" />
                                    {copied === "groomEmail" ? "¡Copiado!" : `Email: ${contactInfo.groom.email}`}
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="registry" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">{t("gifts_amazon_tab_title")}</CardTitle>
                            <CardDescription className="text-center">{t("gifts_amazon_tab_description")}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <div className="relative w-full max-w-md h-64 mb-6 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#d8dacf] to-[#c8cabf] flex items-center justify-center">
                                    <Gift className="h-24 w-24 text-white" />
                                </div>
                            </div>
                            <p className="text-center mb-6">
                                {t("gifts_amazon_text")}
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button className="bg-background-primary font-bold" asChild>
                                <a href={contactInfo.amazonRegistry} target="_blank" rel="noopener noreferrer">
                                    <ShoppingBag className="mr-2 h-4 w-4" />
                                    {t("gifts_amazon_button")}
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="zelle" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">{t("gifts_zelle_tab_title")}</CardTitle>
                            <CardDescription className="text-center">{t("gifts_zelle_tab_description")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="border-rose-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{contactInfo.bride.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Label htmlFor="bride-email">Email</Label>
                                                <div className="flex mt-1">
                                                    <Input id="bride-email" value={contactInfo.bride.email} readOnly className="rounded-r-none" />
                                                    <Button
                                                        variant="secondary"
                                                        className="rounded-l-none"
                                                        onClick={() => copyToClipboard(contactInfo.bride.email, "brideEmailZelle")}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="bride-phone">Teléfono</Label>
                                                <div className="flex mt-1">
                                                    <Input id="bride-phone" value={contactInfo.bride.phone} readOnly className="rounded-r-none" />
                                                    <Button
                                                        variant="secondary"
                                                        className="rounded-l-none"
                                                        onClick={() => copyToClipboard(contactInfo.bride.phone, "bridePhoneZelle")}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-blue-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{contactInfo.groom.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Label htmlFor="groom-email">Email</Label>
                                                <div className="flex mt-1">
                                                    <Input id="groom-email" value={contactInfo.groom.email} readOnly className="rounded-r-none" />
                                                    <Button
                                                        variant="secondary"
                                                        className="rounded-l-none"
                                                        onClick={() => copyToClipboard(contactInfo.groom.email, "groomEmailZelle")}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="groom-phone">Teléfono</Label>
                                                <div className="flex mt-1">
                                                    <Input id="groom-phone" value={contactInfo.groom.phone} readOnly className="rounded-r-none" />
                                                    <Button
                                                        variant="secondary"
                                                        className="rounded-l-none"
                                                        onClick={() => copyToClipboard(contactInfo.groom.phone, "groomPhoneZelle")}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-muted p-4 rounded-lg">
                                    <p className="text-sm text-center">
                                        {t("gifts_zelle_text")}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

