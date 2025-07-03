"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function PricingTable() {
  const { t, language } = useLanguage()

  const freeFeatures = [
    { key: "pricing.feature.allFeatures", included: true },
    { key: "pricing.feature.unlimitedWebsites", included: true },
    { key: "pricing.feature.noRestrictions", included: true },
    { key: "pricing.feature.waf", included: false },
    { key: "pricing.feature.wpLock", included: false },
    { key: "pricing.feature.aiProtection", included: false },
  ]

  const vipFeatures = [
    { key: "pricing.feature.allFeatures", included: true },
    { key: "pricing.feature.unlimitedWebsites", included: true },
    { key: "pricing.feature.noRestrictions", included: true },
    { key: "pricing.feature.waf", included: true },
    { key: "pricing.feature.wpLock", included: true },
    { key: "pricing.feature.aiProtection", included: true },
    { key: "pricing.feature.rebuilds", included: true },
  ]

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("pricing.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">{t("pricing.free.title")}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">{t("pricing.free.price")}</span>
              </div>
              <CardDescription className="mt-4 text-base">
                {t("pricing.free.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span>{t(feature.key)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full bg-gray-800 hover:bg-gray-700">
                {t("pricing.free.button")}
              </Button>
            </CardFooter>
          </Card>

          {/* VIP Plan */}
          <Card className="border-2 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Badge className="bg-blue-500 mb-2">{t("pricing.vip.title")}</Badge>
              </div>
              <CardTitle className="text-2xl font-bold">{t("pricing.vip.title")}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">{language === "en" ? "$20" : "500.000₫"}</span>
                <span className="text-gray-500 ml-1">{t("pricing.perServer")}</span>
              </div>
              <CardDescription className="mt-4 text-base">
                {t("pricing.vip.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-3">
                {vipFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t(feature.key)}</span>
                  </li>
                ))}
                <li className="flex items-start pt-2">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>
                    {language === "en"
                      ? "Additional rebuilds: $5 each"
                      : "Rebuild thêm: 100.000₫/lần"}
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500">
                {t("pricing.vip.button")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
