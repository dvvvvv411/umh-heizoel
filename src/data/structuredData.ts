
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UMH Heizöl",
  "alternateName": "UMH Handels - GmbH",
  "url": "https://umh-heizoel.de",
  "logo": "/lovable-uploads/koelner-kraftstoff-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@umh-heizoel.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Augsburger Str. 9a",
    "addressLocality": "Schwabhausen",
    "postalCode": "85247",
    "addressCountry": "DE"
  },
  "foundingDate": "1994",
  "numberOfEmployees": "10-50",
  "description": "Premium Heizöl ab 70 Cent pro Liter mit kostenloser Lieferung ab 2.000L deutschlandweit.",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Heizöl",
      "description": "Premium Heizöl für Privat- und Geschäftskunden"
    },
    "price": "0.70",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UMH Heizöl",
  "image": "/lovable-uploads/koelner-kraftstoff-logo.png",
  "@id": "https://umh-heizoel.de",
  "url": "https://umh-heizoel.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Augsburger Str. 9a",
    "addressLocality": "Schwabhausen",
    "postalCode": "85247",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.3,
    "longitude": 11.4
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
