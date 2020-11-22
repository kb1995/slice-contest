import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Form from "../../components/form";

const MySlice = ({ slice }) => {
  const title = slice.primary.title;
  const subtitle = slice.primary.subtitle;
  const formUrl = slice.primary.formUrl;
  const buttonCTA = slice.primary.buttonCta;
  const inputs = slice.items;
  return (
    <Container>
      <div className="mb-6 lg:text-center">
        <SectionHeader title={title} mb={"mb-4"} />
        <div className="lg:text-center text-gray-600 lg:w-3/5 w-4/5 lg:mx-auto mt-3">
          <RichText render={subtitle} />
        </div>
      </div>
      <Form formUrl={formUrl} inputs={inputs} buttonCTA={buttonCTA} />
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
