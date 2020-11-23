import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import { NextSeo } from "next-seo";

const Page = (props) => (
  <>
    <NextSeo title="Kris' Slice Machine" />
    <div className="mb-8 grid grid-cols-1 gap-y-16 lg:gap-y-28">
      <SliceZone {...props} resolver={resolver} />
    </div>
  </>
);

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "homepage",
  queryType: "single",
});

export default Page;
