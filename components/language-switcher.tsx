"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="p-2 h-8 w-10 flex items-center justify-center"
        title="English"
      >
        <Image src="/flags/gb.svg" alt="English" width={20} height={15} className="rounded-sm" />
      </Button>
      <Button
        variant={language === "vi" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("vi")}
        className="p-2 h-8 w-10 flex items-center justify-center"
        title="Tiếng Việt"
      >
        <Image src="/flags/vn.svg" alt="Tiếng Việt" width={20} height={15} className="rounded-sm" />
      </Button>
    </div>
  )
}
