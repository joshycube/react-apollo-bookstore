import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import EditBookFormComponent from "./component";

export const QUERY_BOOK = gql`
  query getBook($bookId: Int!) {
    book(bookId: $bookId) {
      bookId
      title
      price
      author
    }
  }
`;

interface IProps {
  match: {
    params: { bookId: string };
  };
}

export const EditBookFormContainer = ({
  match: {
    params: { bookId }
  }
}: IProps) => {
  const result = useQuery(QUERY_BOOK, {
    suspend: false,
    variables: {
      bookId
    }
  });

  if (result.loading) {
    return <span>Loading...</span>;
  }

  return <EditBookFormComponent data={result.data} />;
};

export default withRouter(EditBookFormContainer);
