import React from 'react';
import { Helmet } from 'react-helmet-async';
import site from '../config/site';

export default function SEO({ title, description, path = '/', image, breadcrumbs, jsonLd, noindex = false }) {
  const url = site.url + path;
  const ogImage = image || `${site.url}/images/hero/aluminium-melting-pour.webp`;

  const graph = [];
  if (breadcrumbs && breadcrumbs.length > 1) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: site.url + b.path,
      })),
    });
  }
  if (jsonLd) graph.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {graph.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(graph.length === 1 ? graph[0] : { '@context': 'https://schema.org', '@graph': graph })}</script>
      )}
    </Helmet>
  );
}
