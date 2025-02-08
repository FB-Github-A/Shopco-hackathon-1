// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
 // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })


import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u15rxwv2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});