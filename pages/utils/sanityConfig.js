import {createClient} from "next-sanity"

export const client = createClient({
  projectId: "b0kwbpge",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: false,
})
