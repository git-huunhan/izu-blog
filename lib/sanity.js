import sanityClient from "@sanity/client";

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-06-07",
  // useCdn === true, gives you fast resposive, it will get you cached data
  // useCdn === false, give you little bit slower response, but lastest data
};

export default sanityClient(options);
