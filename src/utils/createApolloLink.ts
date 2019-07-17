import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { GRAPH_URL } from "@/settings";

export const errorHandler = (error: any) => {
  if (error.networkError) {
    const { statusCode } = error.networkError;
    switch (statusCode) {
      case 401:
        console.log("error - access denied");
        break;
      default:
        break;
    }
  }
};

export const httpLink = {
  uri: GRAPH_URL
};

const Link = ApolloLink.from([onError(errorHandler), createHttpLink(httpLink)]);

export default Link;
