export function SEOContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose TinyPanel for Your Ubuntu VPS LEMP Stack Installation?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Automated Server Configuration</h3>
              <p className="text-gray-600 mb-4">
                TinyPanel eliminates the complexity of manual LEMP stack installation on Ubuntu servers. Our automated
                script configures Nginx web server, MariaDB database, and PHP with production-ready optimizations in
                minutes, not hours.
              </p>

              <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Built-in security hardening includes Fail2ban intrusion prevention, SSL certificate automation with
                Let's Encrypt, firewall configuration, and user isolation to protect your Ubuntu VPS from common threats
                and vulnerabilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">WordPress Hosting Optimization</h3>
              <p className="text-gray-600 mb-4">
                Specialized WordPress hosting features include automatic core updates, plugin management, database
                optimization, Redis/Memcached caching integration, and support for popular caching plugins like WP
                Rocket and W3 Total Cache.
              </p>

              <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
              <p className="text-gray-600">
                Advanced performance monitoring with Nginx access logs, PHP error tracking, MySQL query optimization,
                and real-time server resource monitoring to ensure optimal website performance and uptime.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">LEMP Stack Components and Versions</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>
              <strong>Nginx:</strong> Latest stable version with HTTP/2, Brotli compression, and FastCGI caching
            </li>
            <li>
              <strong>MariaDB 10.5:</strong> Optimized database configuration for web applications
            </li>
            <li>
              <strong>PHP 5.6-8.4:</strong> Multiple PHP versions with OPcache and security hardening
            </li>
            <li>
              <strong>SSL/TLS:</strong> Automatic Let's Encrypt certificates with auto-renewal
            </li>
            <li>
              <strong>Security:</strong> Fail2ban, CSF firewall, and malware scanning with ClamAV
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Ubuntu Versions and System Requirements</h2>
          <p className="text-gray-600 mb-4">
            TinyPanel supports Ubuntu 18.04 LTS, 20.04 LTS, 22.04 LTS, and 24.04 LTS. Minimum system requirements
            include 512MB RAM, clean server installation, and root access for optimal performance and security.
          </p>
        </article>
      </div>
    </section>
  )
}
