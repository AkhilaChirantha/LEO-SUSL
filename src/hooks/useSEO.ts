import { useEffect } from "react";

type SEOParams = {
  title: string;
  description?: string;
};

export function useSEO({ title, description }: SEOParams) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    if (description) {
      let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }

      tag.content = description;
    }
  }, [title, description]);
}
