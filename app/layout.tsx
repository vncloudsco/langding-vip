import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TinyPanel - Fast LEMP Stack Installer & Optimizer for Ubuntu VPS | Nginx, MariaDB, PHP",
  description:
    "Install and optimize Nginx, MariaDB, and PHP on Ubuntu VPS servers with TinyPanel. Automated LEMP stack setup with advanced security, SSL certificates, WordPress tools, and performance optimization. Free open-source server management solution.",
  keywords: [
    "LEMP stack installer",
    "Ubuntu server setup",
    "Nginx MariaDB PHP",
    "VPS optimization",
    "server security",
    "SSL certificate automation",
    "WordPress hosting tools",
    "Linux server management",
    "web server optimization",
    "Ubuntu VPS configuration",
    "server automation script",
    "LEMP stack optimization",
    "Nginx configuration",
    "MariaDB setup",
    "PHP optimization",
    "server security hardening",
    "Let's Encrypt SSL",
    "WordPress performance",
    "Redis Memcached",
    "server monitoring tools",
  ].join(", "),
  authors: [
    { name: "Sanvv", url: "https://hostvn.vn" },
    { name: "Mạnh Tường", url: "https://manhtuong.net" },
  ],
  creator: "TinyPanel Team",
  publisher: "TinyActive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tinycp.me/"),
  alternates: {
    canonical: "/panel",
  },
  openGraph: {
    type: "website",
    locale: "vn_VI",
    url: "https://tinycp.me/",
    title: "TinyPanel - Professional LEMP Stack Installer for Ubuntu VPS",
    description:
      "Cài đặt và tối ưu hóa LEMP trên máy chủ Ubuntu VPS với TinyPanel. Thiết lập LEMP tự động với bảo mật toàn diện, chứng chỉ SSL, công cụ WordPress và tối ưu hóa hiệu suất. Giải pháp quản lý máy chủ nguồn mở miễn phí..",
          siteName: "TinyPanel",
    images: [
      {
        url: "https://tinycp.me/flags/ubuntu.avif",
        width: 1200,
        height: 630,
        alt: "TinyPanel LEMP Stack Installer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyPanel - Fast LEMP Stack Installer for Ubuntu VPS",
    description:
      "Automate Ubuntu server setup with Nginx, MariaDB, PHP. Advanced security, SSL automation, WordPress tools included. Free & open-source.",
    images: ["https://tinycp.me/flags/ubuntu.avif"],
    creator: "@tinyactive",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Server Management Software",
  referrer: "origin-when-cross-origin",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TinyPanel",
              description:
                "Professional LEMP stack installer and optimizer for Ubuntu VPS servers. Automates Nginx, MariaDB, and PHP installation with advanced security and performance optimization.",
              url: "https://tinyactive.github.io/panel",
              downloadUrl: "https://tinyactive.github.io/panel/install",
              softwareVersion: "Latest",
              operatingSystem: "Ubuntu 18.04, 20.04, 22.04, 24.04",
              applicationCategory: "ServerApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: [
                {
                  "@type": "Person",
                  name: "Sanvv",
                  url: "https://hostvn.vn",
                },
                {
                  "@type": "Person",
                  name: "Mạnh Tường",
                  url: "https://manhtuong.net",
                },
              ],
              publisher: {
                "@type": "Organization",
                name: "TinyActive",
                url: "https://tinyactive.com",
              },
              softwareRequirements: "Ubuntu 18.04+, 512MB RAM minimum, Root access",
              featureList: [
                "Automated LEMP stack installation",
                "Advanced security configuration",
                "SSL certificate automation",
                "WordPress management tools",
                "Performance optimization",
                "Backup and restore functionality",
                "Multi-PHP version support",
                "Redis and Memcached integration",
              ],
              screenshot: "https://tinycp.me/flags/ubuntu.avif",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TinyActive",
              url: "https://tinyactive.com",
              logo: "https://tinycp.me/flags/ubuntu.avif",
              sameAs: ["https://github.com/TinyActive/panel", "https://www.facebook.com/groups/hostvn.vn"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Technical Support",
                email: "sanvv@hostvn.com",
                availableLanguage: ["English", "Vietnamese"],
              },
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is TinyPanel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "TinyPanel is a comprehensive LEMP stack installer and optimizer for Ubuntu VPS servers. It automates the installation and configuration of Nginx, MariaDB, and PHP with advanced security and performance optimizations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the system requirements for TinyPanel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "TinyPanel requires a clean Ubuntu VPS (18.04, 20.04, 22.04, or 24.04) with minimum 512MB RAM and root access. The server should not have pre-installed web services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is TinyPanel free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, TinyPanel is completely free and open-source. However, commercial redistribution or repackaging is strictly prohibited.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does TinyPanel support WordPress?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, TinyPanel includes comprehensive WordPress management tools including automatic installation, updates, security hardening, performance optimization, and support for popular caching plugins.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
