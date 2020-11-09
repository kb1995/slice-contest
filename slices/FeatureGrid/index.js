import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <div class="container py-12 bg-white">
    <div class="lg:text-center">
      <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        {slice.primary.subheading ? (
          <RichText render={slice.primary.subheading} />
        ) : (
          <div>Template slice, update me!</div>
        )}
      </p>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        {slice.primary.title ? (
          <RichText render={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </h3>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </p>
    </div>
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8 mt-8">
        {slice.items.map((item) => {
          return (
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <img
                  class="h-6 w-6 object-contain"
                  src={item.image.url}
                  alt={item.image.alt}
                />
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-gray-900">
                  {item.title}
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
