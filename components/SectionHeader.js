import { RichText } from "prismic-reactjs";

const SectionHeader = ({ title }) => {
  return (
    <div
      className={`text-3xl leading-9 tracking-tight font-semibold sm:text-4xl sm:leading-10 mb-6`}
    >
      <RichText render={title} />
    </div>
  );
};

export default SectionHeader;
