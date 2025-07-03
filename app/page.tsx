"use client"

import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Shield,
  Zap,
  Database,
  Lock,
  Globe,
  Download,
  Github,
  Users,
  Mail,
  CheckCircle,
  Terminal,
  Rocket,
  Settings,
  FileText,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { ChangelogViewer } from "@/components/changelog-viewer"

export default function TinyPanelLanding() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t("hero.title")}</h1>
              <p className="text-sm text-gray-600">{t("hero.subtitle")}</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("header.features")}
              </Link>
              <Link href="#technologies" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("header.technologies")}
              </Link>
              <Link href="#installation" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("header.installation")}
              </Link>
              <Link href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t("header.support")}
              </Link>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">{t("hero.badge")}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.title")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t("hero.subtitle")}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t("hero.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                {t("hero.quickInstall")}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <FileText className="w-5 h-5 mr-2" />
                {t("hero.viewDocs")}
              </Button>
            </div>
            <div className="mt-8 p-4 bg-gray-900 rounded-lg text-left max-w-2xl mx-auto">
              <code className="text-green-400 text-sm">
                curl -sO https://sdk.tinycp.me/install && chmod +x install && ./install
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("features.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("features.performance.title")}</h3>
                <p className="text-gray-600">{t("features.performance.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("features.security.title")}</h3>
                <p className="text-gray-600">{t("features.security.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("features.management.title")}</h3>
                <p className="text-gray-600">{t("features.management.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose TinyPanel Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0">
              <Rocket className="w-4 h-4 mr-2" />
              {t("why.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t("why.title")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t("why.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("why.subtitle")}</p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div className="group hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {t("why.automation.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{t("why.automation.desc")}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {t("why.automation.badge1")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {t("why.automation.badge2")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {t("why.automation.badge3")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-green-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      {t("why.security.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{t("why.security.desc")}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <Lock className="w-3 h-3 mr-1" />
                        {t("why.security.badge1")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        {t("why.security.badge2")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {t("why.security.badge3")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-8">
              <div className="group hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-purple-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {t("why.wordpress.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{t("why.wordpress.desc")}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <Rocket className="w-3 h-3 mr-1" />
                        {t("why.wordpress.badge1")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Database className="w-3 h-3 mr-1" />
                        {t("why.wordpress.badge2")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Settings className="w-3 h-3 mr-1" />
                        {t("why.wordpress.badge3")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-orange-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Terminal className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {t("why.monitoring.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{t("why.monitoring.desc")}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <Terminal className="w-3 h-3 mr-1" />
                        {t("why.monitoring.badge1")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Database className="w-3 h-3 mr-1" />
                        {t("why.monitoring.badge2")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Server className="w-3 h-3 mr-1" />
                        {t("why.monitoring.badge3")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t("tech.title")}</h3>
              <p className="text-lg text-gray-600">{t("tech.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Nginx */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("tech.nginx.title")}</h4>
                <p className="text-gray-600 mb-4">{t("tech.nginx.desc")}</p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    HTTP/2 Support
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Brotli Compression
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    FastCGI Cache
                  </Badge>
                </div>
              </div>

              {/* MariaDB */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("tech.mariadb.title")}</h4>
                <p className="text-gray-600 mb-4">{t("tech.mariadb.desc")}</p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    Performance Tuned
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Auto Backup
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Query Cache
                  </Badge>
                </div>
              </div>

              {/* PHP */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("tech.php.title")}</h4>
                <p className="text-gray-600 mb-4">{t("tech.php.desc")}</p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    Multi-Version
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    OPcache Enabled
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Security Hardened
                  </Badge>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-green-600" />
                    {t("tech.security.title")}
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {t("tech.security.item1")}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {t("tech.security.item2")}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {t("tech.security.item3")}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-600" />
                    {t("tech.requirements.title")}
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      {t("tech.requirements.item1")}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      {t("tech.requirements.item2")}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      {t("tech.requirements.item3")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">{t("tech.cta.title")}</h3>
                <p className="text-blue-100 mb-4">{t("tech.cta.desc")}</p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  {t("tech.cta.button")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("detailed.title")}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t("detailed.latest")}</h3>
                    <p className="text-gray-600">{t("detailed.latestDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t("detailed.caching")}</h3>
                    <p className="text-gray-600">{t("detailed.cachingDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t("detailed.ssl")}</h3>
                    <p className="text-gray-600">{t("detailed.sslDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t("detailed.devTools")}</h3>
                    <p className="text-gray-600">{t("detailed.devToolsDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-blue-400">$</span> ./install
                </div>
                <div className="space-y-2 text-xs">
                  <div>✓ Installing Nginx...</div>
                  <div>✓ Configuring MariaDB 10.5...</div>
                  <div>✓ Setting up PHP 8.1...</div>
                  <div>✓ Configuring SSL certificates...</div>
                  <div>✓ Setting up security rules...</div>
                  <div>✓ Optimizing performance...</div>
                  <div className="text-green-300">Installation completed successfully!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Management */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("wp.title")}</h2>
            <p className="text-xl text-gray-600">{t("wp.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t("wp.core.title")}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.core.item1")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.core.item2")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.core.item3")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.core.item4")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.core.item5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t("wp.performance.title")}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.performance.item1")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.performance.item2")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.performance.item3")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.performance.item4")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.performance.item5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t("wp.seo.title")}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.seo.item1")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.seo.item2")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.seo.item3")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.seo.item4")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t("wp.seo.item5")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("technologies.title")}</h2>
            <p className="text-xl text-gray-600">{t("technologies.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-blue-600" />
                  {t("technologies.core")}
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary">Nginx (Latest)</Badge>
                  <Badge variant="secondary">MariaDB 10.5</Badge>
                  <Badge variant="secondary">PHP 5.6-8.4</Badge>
                  <Badge variant="secondary">ClamAV</Badge>
                  <Badge variant="secondary">ImunifyAV</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-green-600" />
                  {t("technologies.admin")}
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary">phpMyAdmin</Badge>
                  <Badge variant="secondary">PHPMemcachedAdmin</Badge>
                  <Badge variant="secondary">phpRedisAdmin</Badge>
                  <Badge variant="secondary">Rclone</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-purple-600" />
                  {t("technologies.dev")}
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary">WP-CLI</Badge>
                  <Badge variant="secondary">Composer</Badge>
                  <Badge variant="secondary">Supervisor</Badge>
                  <Badge variant="secondary">Let's Encrypt</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("install.title")}</h2>
            <p className="text-xl text-gray-600 mb-8">{t("install.subtitle")}</p>

            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <code className="text-green-400 text-lg">
                    curl -sO https://sdk.tinycp.me/install && chmod +x install && ./install
                  </code>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">{t("install.requirements")}</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {t("install.req1")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {t("install.req2")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {t("install.req3")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {t("install.req4")}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">{t("install.whatInstalled")}</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Rocket className="w-4 h-4 text-blue-500 mr-2" />
                        {t("install.item1")}
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-4 h-4 text-green-500 mr-2" />
                        {t("install.item2")}
                      </li>
                      <li className="flex items-center">
                        <Lock className="w-4 h-4 text-red-500 mr-2" />
                        {t("install.item3")}
                      </li>
                      <li className="flex items-center">
                        <Settings className="w-4 h-4 text-purple-500 mr-2" />
                        {t("install.item4")}
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                {t("install.startButton")}
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                {t("install.docsButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Community */}
      <section id="support" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("support.title")}</h2>
            <p className="text-xl text-gray-600">{t("support.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-600" />
                  {t("support.official")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{t("support.website")}</p>
                      <p className="text-sm text-gray-600">tinyactive.com, tinycp.me</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{t("support.community")}</p>
                      <p className="text-sm text-gray-600">TinyPanel Community</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{t("support.email")}</p>
                      <p className="text-sm text-gray-600">contact@manhtuong.net</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                  {t("support.contribute")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{t("support.issues")}</p>
                      <Link
                        href="https://github.com/TinyActive/panel/issues"
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        GitHub Issues
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{t("support.features")}</p>
                      <Link href="https://github.com/TinyActive/panel/discussions" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        GitHub Discussions
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{t("support.code")}</p>
                      <Link href="https://github.com/TinyActive/panel/blob/main/Contributors.md" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        GitHub Contributors
                      </Link>                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TinyPanel</span>
              </div>
              <p className="text-gray-400 text-sm">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    {t("header.features")}
                  </Link>
                </li>
                <li>
                  <Link href="#installation" className="hover:text-white transition-colors">
                    {t("header.installation")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/TinyActive/panel" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.community")}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook Group
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/TinyActive/panel" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contributors
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-white transition-colors">
                    {t("header.support")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.developers")}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sanvv - Lead Developer</li>
                <li>Mạnh Tường - Developer</li>
                <li className="pt-2">
                  <p className="text-xs">Based on HOSTVN Scripts</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>{t("footer.copyright")}</p>
            <p className="mt-2">
              <span className="text-red-400">⚠️</span> {t("footer.warning")}
            </p>
          </div>
        </div>
      </footer>

      {/* Changelog Viewer */}
      <ChangelogViewer />
    </div>
  )
}
