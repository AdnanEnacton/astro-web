/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type JsonLdProps = {
  data: Record<string, any>;
};

/**
 * Reusable component for injecting JSON-LD schema markup into the page.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
