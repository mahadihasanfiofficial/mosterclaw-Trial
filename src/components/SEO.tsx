import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  keywords?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://monsterclaw.com', 
  ogType = 'website',
  keywords = 'B2B digital marketing, affiliate marketing, SEO, content strategy, lead generation'
}: SEOProps) {
  const fullTitle = `${title} | MonsterClaw LLC`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="MonsterClaw LLC" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data for AI Search / Voice Search */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MarketingAgency",
          "name": "MonsterClaw LLC",
          "description": description,
          "url": canonical,
          "telephone": "+1-555-MONSTER",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Global",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.linkedin.com/company/monsterclaw",
            "https://twitter.com/monsterclaw"
          ],
          "brand": {
            "@type": "Brand",
            "name": "MonsterClaw",
            "logo": "https://monsterclaw.com/logo.png"
          },
          "knowsAbout": [
            "Affiliate Marketing",
            "Search Engine Optimization",
            "B2B Lead Generation",
            "Conversion Rate Optimization",
            "Enterprise WordPress Development"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "520"
          }
        })}
      </script>
    </Helmet>
  );
}
