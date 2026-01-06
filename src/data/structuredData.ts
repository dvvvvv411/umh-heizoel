
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kölner Kraftstoff",
  "alternateName": "Kölner Kraftstoff GmbH & Co. KG",
  "url": "https://koelnerkraftstoff-heizoel.de",
  "logo": "/lovable-uploads/koelner-kraftstoff-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-221-29291090",
    "contactType": "customer service",
    "email": "info@koelnerkraftstoff-heizoel.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dieselstr. 10",
    "addressLocality": "Köln",
    "postalCode": "50996",
    "addressCountry": "DE"
  },
  "foundingDate": "2010",
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
  "name": "Kölner Kraftstoff",
  "image": "/lovable-uploads/koelner-kraftstoff-logo.png",
  "@id": "https://koelnerkraftstoff-heizoel.de",
  "url": "https://koelnerkraftstoff-heizoel.de",
  "telephone": "+49-221-29291090",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dieselstr. 10",
    "addressLocality": "Köln",
    "postalCode": "50996",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.889,
    "longitude": 6.943
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
