import React from 'react';
import Head from '@docusaurus/Head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Amit Sharma - Full Stack Developer",
  description = "Amit Sharma is a Full Stack Developer with expertise in React, Node.js, and Cloud Technologies. View my projects, read my blog posts, and learn about my mentorship program.",
  keywords = [
    "Amit Sharma",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "Senior Software Engineer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript",
    "Cloud Technologies",
    "Software Development",
    "Technical Mentor"
  ],
  image = "https://avatars.githubusercontent.com/u/97985931?s=30&v=4", // Add your profile image
  url = "https://amitsharma2748.github.io", // Replace with your domain
}: SEOProps) {
  const metaDescription = description;
  const metaTitle = title;
  const metaKeywords = keywords.join(", ");

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="HjOa6niqGyhU60_dz9tIj_VyhCWwFc5D5ZcUR2aMdtY" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="author" content="Amit Sharma" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Amit Sharma",
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/amit-sharma-071654158/",
            "https://github.com/amitsharma2748"
          ],
          "jobTitle": "Full Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          }
        })}
      </script>
    </Head>
  );
} 