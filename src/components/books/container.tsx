import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

import BooksRender from "./render";

export const QUERY_BOOKS = gql`
  {
    books {
      bookId
      title
      price
      author
    }
  }
`;

export const BooksContainer = () => {
  const result = useQuery(QUERY_BOOKS, {
    suspend: false
  });

  if (result.loading) {
    return <span>Loading...</span>;
  }

  return <BooksRender data={result.data} />;
};

export default BooksContainer;
