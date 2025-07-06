import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
}

export function SEOHead({
  title = "TinyPanel - Professional LEMP Stack Installer for Ubuntu VPS",
  description = "Install and optimize Nginx, MariaDB, and PHP on Ubuntu VPS servers with TinyPanel. Automated LEMP stack setup with advanced security, SSL certificates, and WordPress tools.",
  canonical,
  noindex = false,
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />


      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="VN" />
      <meta name="geo.placename" content="Vietnam" />

      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />

      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content="https://tinycp.me/flags/ubuntu.avif" />

      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//tinyactive.com" />
    </Head>
  )
}
