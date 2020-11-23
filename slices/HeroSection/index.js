import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Container from "../../components/Container";
import Button from "../../components/Button";

const MySlice = ({ slice }) => {
  const title = slice.primary.title;
  const description = slice.primary.description;
  const image = slice.primary.image;
  const items = slice.items;
  return (
    <section className="relative">
      <div className="mx-auto pt-12 pb-8 text-center lg:py-48 lg:text-left">
        <Container>
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl tracking-wider">
              {RichText.asText(title)}
            </h1>
            <div className="mx-auto lg:mx-0 lg:w-4/5 text-gray-700 mt-3 text-xl lg:text-2xl">
              <RichText render={description} />
            </div>
            <div className="sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 mt-8">
              {items.map((item, idx) => {
                return (
                  <div>
                    <Button
                      href={item.link.url}
                      text={item.ctaText}
                      targetBlank={item.link.target == "_blank"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
      <div className="overflow-hidden relative w-full h-48 md:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute insert-0 w-full h-full object-cover"
          src={image.url}
          alt={image.alt}
        />
      </div>
    </section>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
