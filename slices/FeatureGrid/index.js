import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";

const MySlice = ({ slice }) => {
  const title = slice.primary.title;
  return (
    <Container>
      <div className="lg:text-center">
        <SectionHeader title={title} />
        <div className="text-xl text-gray-700 w-4/5 lg:w-3/5 lg:mx-auto">
          {slice.primary.description ? (
            <RichText render={slice.primary.description} />
          ) : (
            <p>Template slice, update me!</p>
          )}
        </div>
      </div>

      <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mt-8">
        {slice.items.map((item) => {
          return (
            <div className="flex flex-col items-center">
              <div className="transform hover:rotate-180 duration-300 flex items-center justify-center h-16 w-16 bg-pink-100 rounded-full">
                <img
                  className="h-8 w-8 object-contain"
                  src={item.image.url}
                  alt={item.image.alt}
                />
              </div>
              <div className="mt-4 text-center">
                <h5 className="text-lg md:text-xl font-semibold text-pink-900">
                  {item.title}
                </h5>
                <p className="mt-3 text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
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
