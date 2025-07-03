"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "vi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    "header.features": "Features",
    "header.technologies": "Technologies",
    "header.pricing": "Pricing",
    "header.installation": "Installation",
    "header.support": "Support",
    
    // Pricing Table
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle": "Choose the plan that works for your needs",
    "pricing.free.title": "Free",
    "pricing.free.price": "Free",
    "pricing.free.description": "Get started with essential features at no cost",
    "pricing.free.button": "Get Started",
    "pricing.vip.title": "VIP",
    "pricing.vip.price": "$20",
    "pricing.vip.description": "Enhanced security and protection features",
    "pricing.vip.button": "Upgrade Now",
    "pricing.perServer": "per server",
    "pricing.feature.allFeatures": "All Essential Features",
    "pricing.feature.unlimitedWebsites": "Unlimited Websites",
    "pricing.feature.noRestrictions": "No Feature Restrictions",
    "pricing.feature.waf": "WAF ModSecurity",
    "pricing.feature.wpLock": "WordPress Lockdown",
    "pricing.feature.aiProtection": "AI Crawler Protection",
    "pricing.feature.rebuilds": "5 Free Server Rebuilds",
    "pricing.feature.additionalRebuilds": "Additional rebuilds: $5 each",

    // Hero Section
    "hero.badge": "🚀 Fast, Secure & Optimized LEMP Stack",
    "hero.title": "TinyPanel",
    "hero.subtitle": "LEMP Stack Installer",
    "hero.description":
      "Quickly install and configure Nginx, MariaDB, and PHP with optimized performance and security settings. Built for Ubuntu VPS servers with comprehensive management tools.",
    "hero.quickInstall": "Quick Install",
    "hero.viewDocs": "View Documentation",

    // Key Features
    "features.title": "Powerful Features for Modern Web Hosting",
    "features.subtitle": "Everything you need to set up and manage a high-performance web server environment",
    "features.performance.title": "Performance Optimized",
    "features.performance.desc":
      "Optimized MySQL, Nginx, and PHP configurations based on your VPS specifications. Includes Brotli compression and FastCGI caching.",
    "features.security.title": "Advanced Security",
    "features.security.desc":
      "Comprehensive security with Fail2ban, user isolation, disabled dangerous PHP functions, and automatic SSL certificate management.",
    "features.management.title": "Easy Management",
    "features.management.desc":
      "User-friendly menu system with regular updates, comprehensive WordPress tools, and automated backup solutions.",
    "features.waf.title": "WAF ModSecurity",
    "features.waf.desc":
      "Web Application Firewall with ModSecurity integration to protect your websites from common vulnerabilities, SQL injections, and cross-site scripting attacks.",
    "features.wplock.title": "WordPress Lockdown",
    "features.wplock.desc":
      "Enhanced WordPress security system that limits malware propagation and protects core files from unauthorized modifications with real-time monitoring.",
    "features.aibot.title": "AI Crawler Protection",
    "features.aibot.desc":
      "Advanced bot detection and protection system that prevents AI crawlers from scraping your website content and consuming server resources.",

    // Why Choose Section
    "why.badge": "Why Choose TinyPanel?",
    "why.title": "The Ultimate Solution for Your",
    "why.titleHighlight": "Ubuntu VPS LEMP Stack",
    "why.subtitle":
      "Discover why thousands of developers and system administrators trust TinyPanel for their server management needs",

    "why.automation.title": "Automated Server Configuration",
    "why.automation.desc":
      "TinyPanel eliminates the complexity of manual LEMP stack installation on Ubuntu servers. Our intelligent automation configures Nginx web server, MariaDB database, and PHP with production-ready optimizations in minutes, not hours.",
    "why.automation.badge1": "One-Click Setup",
    "why.automation.badge2": "Production Ready",
    "why.automation.badge3": "Zero Downtime",

    "why.security.title": "Enterprise-Grade Security",
    "why.security.desc":
      "Built-in security hardening includes Fail2ban intrusion prevention, SSL certificate automation with Let's Encrypt, advanced firewall configuration, and user isolation to protect your Ubuntu VPS from threats.",
    "why.security.badge1": "SSL Auto-Renewal",
    "why.security.badge2": "Fail2ban Protection",
    "why.security.badge3": "User Isolation",

    "why.wordpress.title": "WordPress Hosting Optimization",
    "why.wordpress.desc":
      "Specialized WordPress hosting features include automatic core updates, intelligent plugin management, database optimization, Redis/Memcached caching integration, and seamless support for popular caching plugins.",
    "why.wordpress.badge1": "WP-Rocket Ready",
    "why.wordpress.badge2": "Auto Optimization",
    "why.wordpress.badge3": "Plugin Manager",

    "why.monitoring.title": "Advanced Performance Monitoring",
    "why.monitoring.desc":
      "Real-time performance monitoring with detailed Nginx access logs, PHP error tracking, MySQL query optimization, and comprehensive server resource monitoring to ensure optimal website performance and maximum uptime.",
    "why.monitoring.badge1": "Real-time Logs",
    "why.monitoring.badge2": "Query Optimization",
    "why.monitoring.badge3": "Resource Monitor",

    // Technical Specs
    "tech.title": "Complete LEMP Stack Components",
    "tech.subtitle": "Industry-leading software versions with optimized configurations",
    "tech.nginx.title": "Nginx Web Server",
    "tech.nginx.desc": "Latest stable version with HTTP/2, Brotli compression, and FastCGI caching",
    "tech.mariadb.title": "MariaDB 10.5",
    "tech.mariadb.desc": "Optimized database configuration specifically tuned for web applications",
    "tech.php.title": "PHP 5.6-8.4",
    "tech.php.desc": "Multiple PHP versions with OPcache optimization and security hardening",

    "tech.security.title": "Security & SSL",
    "tech.security.item1": "Automatic Let's Encrypt SSL certificates with auto-renewal",
    "tech.security.item2": "Advanced firewall configuration with CSF integration",
    "tech.security.item3": "Comprehensive malware scanning with ClamAV & ImunifyAV",

    // Pricing Table
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle": "Choose the plan that works for your needs",
    "pricing.free.title": "Free",
    "pricing.free.price": "Free",
    "pricing.free.description": "Get started with essential features at no cost",
    "pricing.free.button": "Get Started",
    "pricing.vip.title": "VIP",
    "pricing.vip.price": "$20",
    "pricing.vip.description": "Enhanced security and protection features",
    "pricing.vip.button": "Upgrade Now",
    "pricing.perServer": "per server",
    "pricing.feature.allFeatures": "All Essential Features",
    "pricing.feature.unlimitedWebsites": "Unlimited Websites",
    "pricing.feature.noRestrictions": "No Feature Restrictions",
    "pricing.feature.waf": "WAF ModSecurity",
    "pricing.feature.wpLock": "WordPress Lockdown",
    "pricing.feature.aiProtection": "AI Crawler Protection",
    "pricing.feature.rebuilds": "5 Free Server Rebuilds",
    "pricing.feature.additionalRebuilds": "Additional rebuilds: $5 each",

    "tech.requirements.title": "System Requirements",
    "tech.requirements.item1": "Ubuntu 18.04, 20.04, 22.04, 24.04 LTS support",
    "tech.requirements.item2": "Minimum 512MB RAM with clean server installation",
    "tech.requirements.item3": "Root access required for optimal performance",

    "tech.cta.title": "Ready to Get Started?",
    "tech.cta.desc": "Install TinyPanel on your Ubuntu VPS in just one command",
    "tech.cta.button": "Start Installation Now",

    // WordPress Management
    "wp.title": "Comprehensive WordPress Management",
    "wp.subtitle": "Specialized tools for WordPress hosting and optimization",
    "wp.core.title": "Core Management",
    "wp.core.item1": "Version checking & updates",
    "wp.core.item2": "Plugin management",
    "wp.core.item3": "Domain changes",
    "wp.core.item4": "Admin password reset",
    "wp.core.item5": "Database prefix randomization",

    "wp.performance.title": "Performance & Cache",
    "wp.performance.item1": "Database optimization",
    "wp.performance.item2": "Redis/Memcached setup",
    "wp.performance.item3": "WP-Rocket configuration",
    "wp.performance.item4": "W3 Total Cache support",
    "wp.performance.item5": "Cache Enabler integration",

    "wp.seo.title": "Security & SEO",
    "wp.seo.item1": "Yoast SEO configuration",
    "wp.seo.item2": "Rank Math setup",
    "wp.seo.item3": "Maintenance mode",
    "wp.seo.item4": "Debug mode toggle",
    "wp.seo.item5": "XML-RPC management",

    // Technologies
    "technologies.title": "Built with Modern Technologies",
    "technologies.subtitle": "Industry-standard tools and frameworks for reliable performance",
    "technologies.core": "Core Components",
    "technologies.admin": "Admin Tools",
    "technologies.dev": "Development Tools",

    // Installation
    "install.title": "Quick Installation",
    "install.subtitle": "Get started with TinyPanel in just one command",
    "install.requirements": "System Requirements",
    "install.req1": "Minimum 512MB RAM VPS",
    "install.req2": "Clean server (no pre-installed services)",
    "install.req3": "Ubuntu 18.04, 20.04, or Debian 10",
    "install.req4": "Root access required",
    "install.whatInstalled": "What Gets Installed",
    "install.item1": "Optimized LEMP stack",
    "install.item2": "Security configurations",
    "install.item3": "SSL certificates",
    "install.item4": "Management tools",
    "install.startButton": "Start Installation",
    "install.docsButton": "Read Full Documentation",

    // Support
    "support.title": "Support & Community",
    "support.subtitle": "Get help and connect with the TinyPanel community",
    "support.official": "Official Channels",
    "support.website": "Website",
    "support.community": "Github Community",
    "support.email": "Email Support",
    "support.contribute": "Contribute & Feedback",
    "support.issues": "Report Issues",
    "support.features": "Feature Requests",
    "support.code": "Code Contributions",

    // Footer
    "footer.description": "Fast, secure, and optimized LEMP stack installer for Ubuntu VPS servers.",
    "footer.quickLinks": "Quick Links",
    "footer.community": "Community",
    "footer.developers": "Developers",
    "footer.copyright": "© 2025 TinyPanel - Based on HOSTVN Scripts. All rights reserved.",
    "footer.warning": "Commercial redistribution or repackaging is strictly prohibited.",

    // Additional sections
    "detailed.title": "Complete LEMP Stack Solution",
    "detailed.latest": "Latest Software Versions",
    "detailed.latestDesc": "MariaDB 10.5, latest Nginx, multiple PHP versions (5.6, 7.0-7.4, 8.0-8.4)",
    "detailed.caching": "Caching Solutions",
    "detailed.cachingDesc": "Redis & Memcached support with FastCGI cache configuration",
    "detailed.ssl": "SSL & Security",
    "detailed.sslDesc": "Let's Encrypt integration with CloudFlare DNS API support",
    "detailed.devTools": "Development Tools",
    "detailed.devToolsDesc": "WP-CLI, Composer, Supervisor, Rclone, and malware scanning",
    "detailed.waf": "WAF ModSecurity",
    "detailed.wafDesc": "Web Application Firewall with ModSecurity integration to protect your websites from common vulnerabilities, SQL injections, and cross-site scripting attacks.",
    "detailed.wplock": "WordPress Lockdown",
    "detailed.wplockDesc": "Enhanced WordPress security system that limits malware propagation and protects core files from unauthorized modifications with real-time monitoring.",
    "detailed.aibot": "AI Crawler Protection",
    "detailed.aibotDesc": "Advanced bot detection and protection system that prevents AI crawlers from scraping your website content and consuming server resources.",
  },
  vi: {
    // Header
    "header.features": "Tính năng",
    "header.technologies": "Công nghệ",
    "header.pricing": "Bảng giá",
    "header.installation": "Cài đặt",
    "header.support": "Hỗ trợ",

    // Hero Section
    "hero.badge": "🚀 LEMP Stack Nhanh, An toàn & Tối ưu",
    "hero.title": "TinyPanel",
    "hero.subtitle": "Trình cài đặt LEMP Stack",
    "hero.description":
      "Cài đặt và cấu hình nhanh chóng Nginx, MariaDB và PHP với thiết lập hiệu suất và bảo mật tối ưu. Được xây dựng cho máy chủ Ubuntu VPS với các công cụ quản lý toàn diện.",
    "hero.quickInstall": "Cài đặt nhanh",
    "hero.viewDocs": "Xem tài liệu",
    
    // Pricing Table
    "pricing.title": "Bảng giá đơn giản, minh bạch",
    "pricing.subtitle": "Chọn gói phù hợp với nhu cầu của bạn",
    "pricing.free.title": "Miễn phí",
    "pricing.free.price": "Miễn phí",
    "pricing.free.description": "Bắt đầu với các tính năng cơ bản không mất phí",
    "pricing.free.button": "Bắt đầu ngay",
    "pricing.vip.title": "VIP",
    "pricing.vip.price": "500.000₫",
    "pricing.vip.description": "Tính năng bảo mật và bảo vệ nâng cao",
    "pricing.vip.button": "Nâng cấp ngay",
    "pricing.perServer": "cho mỗi máy chủ",
    "pricing.feature.allFeatures": "Tất cả tính năng cơ bản",
    "pricing.feature.unlimitedWebsites": "Website không giới hạn",
    "pricing.feature.noRestrictions": "Không giới hạn tính năng",
    "pricing.feature.waf": "WAF ModSecurity",
    "pricing.feature.wpLock": "WordPress Lockdown",
    "pricing.feature.aiProtection": "Chặn AI Crawler",
    "pricing.feature.rebuilds": "5 lần Rebuild máy chủ miễn phí",
    "pricing.feature.additionalRebuilds": "Rebuild thêm: 100.000₫/lần",

    // Key Features
    "features.title": "Tính năng mạnh mẽ cho Web Hosting hiện đại",
    "features.subtitle": "Mọi thứ bạn cần để thiết lập và quản lý môi trường máy chủ web hiệu suất cao",
    "features.performance.title": "Tối ưu hiệu suất",
    "features.performance.desc":
      "Cấu hình MySQL, Nginx và PHP được tối ưu dựa trên thông số VPS của bạn. Bao gồm nén Brotli và bộ nhớ đệm FastCGI.",
    "features.security.title": "Bảo mật nâng cao",
    "features.security.desc":
      "Bảo mật toàn diện với Fail2ban, cô lập người dùng, vô hiệu hóa các hàm PHP nguy hiểm và quản lý chứng chỉ SSL tự động.",
    "features.management.title": "Quản lý dễ dàng",
    "features.management.desc":
      "Hệ thống menu thân thiện với người dùng với cập nhật thường xuyên, công cụ WordPress toàn diện và giải pháp sao lưu tự động.",
    "features.waf.title": "WAF ModSecurity",
    "features.waf.desc":
      "Tường lửa ứng dụng web với tích hợp ModSecurity để bảo vệ trang web của bạn khỏi các lỗ hổng phổ biến, SQL injection và tấn công cross-site scripting.",
    "features.wplock.title": "WordPress Lockdown",
    "features.wplock.desc":
      "Hệ thống bảo mật WordPress nâng cao hạn chế sự lây lan của mã độc và bảo vệ các tệp lõi khỏi các sửa đổi trái phép với giám sát thời gian thực.",
    "features.aibot.title": "Chặn AI Crawler",
    "features.aibot.desc":
      "Hệ thống phát hiện và bảo vệ bot nâng cao ngăn chặn các trình thu thập dữ liệu AI thu thập nội dung trang web của bạn và tiêu tốn tài nguyên máy chủ.",

    // Why Choose Section
    "why.badge": "Tại sao chọn TinyPanel?",
    "why.title": "Giải pháp tối ưu cho",
    "why.titleHighlight": "Ubuntu VPS LEMP Stack của bạn",
    "why.subtitle":
      "Khám phá lý do hàng nghìn nhà phát triển và quản trị viên hệ thống tin tưởng TinyPanel cho nhu cầu quản lý máy chủ",

    "why.automation.title": "Cấu hình máy chủ tự động",
    "why.automation.desc":
      "TinyPanel loại bỏ sự phức tạp của việc cài đặt LEMP stack thủ công trên máy chủ Ubuntu. Tự động hóa thông minh của chúng tôi cấu hình máy chủ web Nginx, cơ sở dữ liệu MariaDB và PHP với tối ưu hóa sẵn sàng sản xuất trong vài phút, không phải hàng giờ.",
    "why.automation.badge1": "Thiết lập một cú nhấp",
    "why.automation.badge2": "Sẵn sàng sản xuất",
    "why.automation.badge3": "Không thời gian chết",

    "why.security.title": "Bảo mật cấp doanh nghiệp",
    "why.security.desc":
      "Tăng cường bảo mật tích hợp bao gồm ngăn chặn xâm nhập Fail2ban, tự động hóa chứng chỉ SSL với Let's Encrypt, cấu hình tường lửa nâng cao và cô lập người dùng để bảo vệ Ubuntu VPS của bạn khỏi các mối đe dọa.",
    "why.security.badge1": "Tự động gia hạn SSL",
    "why.security.badge2": "Bảo vệ Fail2ban",
    "why.security.badge3": "Cô lập người dùng",

    "why.wordpress.title": "Tối ưu hóa WordPress Hosting",
    "why.wordpress.desc":
      "Các tính năng hosting WordPress chuyên biệt bao gồm cập nhật lõi tự động, quản lý plugin thông minh, tối ưu hóa cơ sở dữ liệu, tích hợp bộ nhớ đệm Redis/Memcached và hỗ trợ liền mạch cho các plugin bộ nhớ đệm phổ biến.",
    "why.wordpress.badge1": "Sẵn sàng WP-Rocket",
    "why.wordpress.badge2": "Tự động tối ưu",
    "why.wordpress.badge3": "Quản lý Plugin",

    "why.monitoring.title": "Giám sát hiệu suất nâng cao",
    "why.monitoring.desc":
      "Giám sát hiệu suất thời gian thực với nhật ký truy cập Nginx chi tiết, theo dõi lỗi PHP, tối ưu hóa truy vấn MySQL và giám sát tài nguyên máy chủ toàn diện để đảm bảo hiệu suất trang web tối ưu và thời gian hoạt động tối đa.",
    "why.monitoring.badge1": "Nhật ký thời gian thực",
    "why.monitoring.badge2": "Tối ưu truy vấn",
    "why.monitoring.badge3": "Giám sát tài nguyên",

    // Technical Specs
    "tech.title": "Các thành phần LEMP Stack hoàn chỉnh",
    "tech.subtitle": "Phiên bản phần mềm hàng đầu trong ngành với cấu hình tối ưu",
    "tech.nginx.title": "Máy chủ web Nginx",
    "tech.nginx.desc": "Phiên bản ổn định mới nhất với HTTP/2, nén Brotli và bộ nhớ đệm FastCGI",
    "tech.mariadb.title": "MariaDB 10.5",
    "tech.mariadb.desc": "Cấu hình cơ sở dữ liệu được tối ưu hóa đặc biệt cho các ứng dụng web",
    "tech.php.title": "PHP 5.6-8.4",
    "tech.php.desc": "Nhiều phiên bản PHP với tối ưu hóa OPcache và tăng cường bảo mật",

    "tech.security.title": "Bảo mật & SSL",
    "tech.security.item1": "Chứng chỉ SSL Let's Encrypt tự động với tự động gia hạn",
    "tech.security.item2": "Cấu hình tường lửa nâng cao với tích hợp CSF",
    "tech.security.item3": "Quét phần mềm độc hại toàn diện với ClamAV & ImunifyAV",

    // Pricing Table
    "pricing.title": "Bảng giá đơn giản, minh bạch",
    "pricing.subtitle": "Chọn gói phù hợp với nhu cầu của bạn",
    "pricing.free.title": "Miễn phí",
    "pricing.free.price": "Miễn phí",
    "pricing.free.description": "Bắt đầu với các tính năng cơ bản không mất phí",
    "pricing.free.button": "Bắt đầu ngay",
    "pricing.vip.title": "VIP",
    "pricing.vip.price": "500.000₫",
    "pricing.vip.description": "Tính năng bảo mật và bảo vệ nâng cao",
    "pricing.vip.button": "Nâng cấp ngay",
    "pricing.perServer": "cho mỗi máy chủ",
    "pricing.feature.allFeatures": "Tất cả tính năng cần thiết",
    "pricing.feature.unlimitedWebsites": "Website không giới hạn",
    "pricing.feature.noRestrictions": "Không giới hạn tính năng",
    "pricing.feature.waf": "WAF ModSecurity",
    "pricing.feature.wpLock": "WordPress Lockdown",
    "pricing.feature.aiProtection": "Chặn AI Crawler",
    "pricing.feature.rebuilds": "5 lần Rebuild máy chủ miễn phí",
    "pricing.feature.additionalRebuilds": "Rebuild thêm: 100.000₫/lần",

    "tech.requirements.title": "Yêu cầu hệ thống",
    "tech.requirements.item1": "Hỗ trợ Ubuntu 18.04, 20.04, 22.04, 24.04 LTS",
    "tech.requirements.item2": "Tối thiểu 512MB RAM với cài đặt máy chủ sạch",
    "tech.requirements.item3": "Yêu cầu quyền root để có hiệu suất tối ưu",

    "tech.cta.title": "Sẵn sàng bắt đầu?",
    "tech.cta.desc": "Cài đặt TinyPanel trên Ubuntu VPS của bạn chỉ với một lệnh",
    "tech.cta.button": "Bắt đầu cài đặt ngay",

    // WordPress Management
    "wp.title": "Quản lý WordPress toàn diện",
    "wp.subtitle": "Công cụ chuyên biệt cho hosting và tối ưu hóa WordPress",
    "wp.core.title": "Quản lý lõi",
    "wp.core.item1": "Kiểm tra phiên bản & cập nhật",
    "wp.core.item2": "Quản lý plugin",
    "wp.core.item3": "Thay đổi tên miền",
    "wp.core.item4": "Đặt lại mật khẩu admin",
    "wp.core.item5": "Ngẫu nhiên hóa tiền tố cơ sở dữ liệu",

    "wp.performance.title": "Hiệu suất & Bộ nhớ đệm",
    "wp.performance.item1": "Tối ưu hóa cơ sở dữ liệu",
    "wp.performance.item2": "Thiết lập Redis/Memcached",
    "wp.performance.item3": "Cấu hình WP-Rocket",
    "wp.performance.item4": "Hỗ trợ W3 Total Cache",
    "wp.performance.item5": "Tích hợp Cache Enabler",

    "wp.seo.title": "Bảo mật & SEO",
    "wp.seo.item1": "Cấu hình Yoast SEO",
    "wp.seo.item2": "Thiết lập Rank Math",
    "wp.seo.item3": "Chế độ bảo trì",
    "wp.seo.item4": "Chuyển đổi chế độ debug",
    "wp.seo.item5": "Quản lý XML-RPC",

    // Technologies
    "technologies.title": "Được xây dựng với công nghệ hiện đại",
    "technologies.subtitle": "Công cụ và framework tiêu chuẩn ngành cho hiệu suất đáng tin cậy",
    "technologies.core": "Thành phần lõi",
    "technologies.admin": "Công cụ quản trị",
    "technologies.dev": "Công cụ phát triển",

    // Installation
    "install.title": "Cài đặt nhanh",
    "install.subtitle": "Bắt đầu với TinyPanel chỉ với một lệnh",
    "install.requirements": "Yêu cầu hệ thống",
    "install.req1": "VPS tối thiểu 512MB RAM",
    "install.req2": "Máy chủ sạch (không có dịch vụ cài đặt sẵn)",
    "install.req3": "Ubuntu 18.04, 20.04 hoặc Debian 10",
    "install.req4": "Yêu cầu quyền root",
    "install.whatInstalled": "Những gì được cài đặt",
    "install.item1": "LEMP stack được tối ưu",
    "install.item2": "Cấu hình bảo mật",
    "install.item3": "Chứng chỉ SSL",
    "install.item4": "Công cụ quản lý",
    "install.startButton": "Bắt đầu cài đặt",
    "install.docsButton": "Đọc tài liệu đầy đủ",

    // Support
    "support.title": "Hỗ trợ & Cộng đồng",
    "support.subtitle": "Nhận trợ giúp và kết nối với cộng đồng TinyPanel",
    "support.official": "Kênh chính thức",
    "support.website": "Trang web",
    "support.community": "Cộng đồng Github",
    "support.email": "Hỗ trợ Email",
    "support.contribute": "Đóng góp & Phản hồi",
    "support.issues": "Báo cáo vấn đề",
    "support.features": "Yêu cầu tính năng",
    "support.code": "Đóng góp mã",

    // Footer
    "footer.description": "Trình cài đặt LEMP stack nhanh, an toàn và tối ưu cho máy chủ Ubuntu VPS.",
    "footer.quickLinks": "Liên kết nhanh",
    "footer.community": "Cộng đồng",
    "footer.developers": "Nhà phát triển",
    "footer.copyright": "© 2025 TinyPanel - Dựa trên HOSTVN Scripts. Tất cả quyền được bảo lưu.",
    "footer.warning": "Nghiêm cấm phân phối lại hoặc đóng gói lại cho mục đích thương mại.",

    // Additional sections
    "detailed.title": "Giải pháp LEMP Stack hoàn chỉnh",
    "detailed.latest": "Phiên bản phần mềm mới nhất",
    "detailed.latestDesc": "MariaDB 10.5, Nginx mới nhất, nhiều phiên bản PHP (5.6, 7.0-7.4, 8.0-8.4)",
    "detailed.caching": "Giải pháp bộ nhớ đệm",
    "detailed.cachingDesc": "Hỗ trợ Redis & Memcached với cấu hình bộ nhớ đệm FastCGI",
    "detailed.ssl": "SSL & Bảo mật",
    "detailed.sslDesc": "Tích hợp Let's Encrypt với hỗ trợ CloudFlare DNS API",
    "detailed.devTools": "Công cụ phát triển",
    "detailed.devToolsDesc": "WP-CLI, Composer, Supervisor, Rclone và quét phần mềm độc hại",
    "detailed.waf": "WAF ModSecurity",
    "detailed.wafDesc": "Tường lửa ứng dụng web với tích hợp ModSecurity để bảo vệ trang web của bạn khỏi các lỗ hổng phổ biến, SQL injection và tấn công cross-site scripting.",
    "detailed.wplock": "WordPress Lockdown",
    "detailed.wplockDesc": "Hệ thống bảo mật WordPress nâng cao hạn chế sự lây lan của mã độc và bảo vệ các tệp lõi khỏi các sửa đổi trái phép với giám sát thời gian thực.",
    "detailed.aibot": "Chặn AI Crawler",
    "detailed.aibotDesc": "Hệ thống phát hiện và bảo vệ bot nâng cao ngăn chặn các trình thu thập dữ liệu AI thu thập nội dung trang web của bạn và tiêu tốn tài nguyên máy chủ.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguage(savedLanguage)
    } else {
      // Nếu không có ngôn ngữ đã lưu, mặc định là tiếng Việt
      setLanguage("vi")
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if
