import React from "react";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import { RichText } from "prismic-reactjs";

const Resources = ({ slice }) => {
  const title = slice.primary.title;
  const items = slice.items;
  return (
    <Container>
      <SectionHeader title={title} />
      <div className="grid gap-8 md:gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {items.map((item, idx) => {
          const title = item.title;
          const description = item.description;
          const ctaText = item.ctaText;
          const ctaLink = item.ctaLink;
          return (
            <div key={`resources-${idx}`}>
              {console.log(item)}

              <div className="text-xl leading-7 font-semibold text-gray-900">
                {title}
              </div>
              <div className="mt-2 text-base leading-6 text-gray-700">
                <RichText render={description} />
              </div>

              <div className="mt-6 w-3/5">
                {ctaLink && ctaLink.link_type == "Web" && (
                  <Button
                    href={ctaLink.url}
                    text={ctaText}
                    targetBlank={ctaLink.target == "_blank"}
                  />
                )}
                {ctaLink && ctaLink.link_type == "Media" && (
                  <Button href={ctaLink.url} text={ctaText} targetBlank />
                )}
                {ctaLink && ctaLink.link_type == "Document" && (
                  <Button href={linkResolver(ctaLink)} text={ctaText} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Resources;
