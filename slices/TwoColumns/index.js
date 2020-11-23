import React from "react";
import { RichText } from "prismic-reactjs";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";

const TwoColumns = ({ slice }) => {
  const title = slice.primary.title;
  const description = slice.primary.description;
  const items = slice.items;

  return (
    <Container>
      <SectionHeader title={title} />
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2">
          <div className="prose">
            <RichText render={description} />
          </div>
        </div>
        <div>
          <ul className="space-y-5">
            {items.map((item, idx) => {
              return (
                <li
                  key={`about-list-item-${idx}`}
                  className="flex items-center space-x-3"
                >
                  <svg
                    className="w-8 h-8 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{item.listItem}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default TwoColumns;
