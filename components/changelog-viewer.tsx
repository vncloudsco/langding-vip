"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Plus } from "lucide-react"

interface ChangelogEntry {
  version: string
  changes: {
    type: "Added" | "Removed" | "Fixed" | "Changed"
    description: string
  }[]
}

export function ChangelogViewer() {
  const [changelog, setChangelog] = useState<ChangelogEntry[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Parse changelog from the public file
    fetch("/Changelog.txt")
      .then((response) => response.text())
      .then((text) => {
        const entries = parseChangelog(text)
        setChangelog(entries)
      })
      .catch((error) => {
        console.error("Error loading changelog:", error)
      })
  }, [])

  const parseChangelog = (text: string): ChangelogEntry[] => {
    const lines = text.split("\n")
    const entries: ChangelogEntry[] = []
    let currentEntry: ChangelogEntry | null = null

    for (const line of lines) {
      const trimmedLine = line.trim()

      if (trimmedLine.startsWith("v")) {
        // New version
        if (currentEntry) {
          entries.push(currentEntry)
        }
        currentEntry = {
          version: trimmedLine,
          changes: [],
        }
      } else if (trimmedLine.startsWith("- ")) {
        // Change entry
        const changeText = trimmedLine.substring(2)
        const colonIndex = changeText.indexOf(":")

        if (colonIndex > 0 && currentEntry) {
          const type = changeText.substring(0, colonIndex).trim() as "Added" | "Removed" | "Fixed" | "Changed"
          const description = changeText.substring(colonIndex + 1).trim()

          currentEntry.changes.push({
            type,
            description,
          })
        }
      }
    }

    if (currentEntry) {
      entries.push(currentEntry)
    }

    return entries
  }

  const getChangeTypeColor = (type: string) => {
    switch (type) {
      case "Added":
        return "bg-green-100 text-green-800"
      case "Removed":
        return "bg-red-100 text-red-800"
      case "Fixed":
        return "bg-blue-100 text-blue-800"
      case "Changed":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!isOpen) {
    return (
      <Button variant="outline" onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 z-50">
        <FileText className="w-4 h-4 mr-2" />
        Changelog
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Changelog
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            <Plus className="w-4 h-4 rotate-45" />
          </Button>
        </CardHeader>
        <CardContent className="overflow-y-auto max-h-[60vh]">
          <div className="space-y-6">
            {changelog.map((entry, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{entry.version}</h3>
                <div className="space-y-2">
                  {entry.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start space-x-3">
                      <Badge className={`text-xs ${getChangeTypeColor(change.type)}`}>{change.type}</Badge>
                      <p className="text-sm text-gray-600 flex-1">{change.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
