import { createClient } from "@sanity/client"; 
import { fetchQuery } from "./utilis/supports";

const client = createClient({
    projectId : "m1eqlzbg",
    dataset: "production",
    apiVersion: "2023-07-04",
    useCdn : true
})

export const fetchFeeds = async () =>{
    let data = await client.fetch(fetchQuery).then(feeds => {
        return feeds;
    });
    return data;
};