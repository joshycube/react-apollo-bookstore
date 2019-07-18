import React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import EditBookFormComponent from "./component";

export const QUERY_BOOK = gql`
  query GetBook($bookId: Int!) {
    book(bookId: $bookId) {
      bookId
      title
      price
      author
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation editBook(
    $bookId: Int!
    $title: String!
    $author: String!
    $price: Float!
  ) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      bookId
      title
      price
      author
    }
  }
`;

interface IProps {
  history: {
    goBack: () => void;
  };
  match: {
    params: { bookId: string };
  };
}

export const EditBookFormContainer = ({
  match: {
    params: { bookId }
  },
  history: { goBack }
}: IProps) => {
  const result = useQuery(QUERY_BOOK, {
    suspend: false,
    variables: {
      bookId
    },
    fetchPolicy: "network-only"
  });

  const updateBook = useMutation(UPDATE_BOOK);

  if (result.loading) {
    return <span>Loading...</span>;
  }

  return (
    <EditBookFormComponent
      updateBook={updateBook}
      goBack={goBack}
      data={result.data}
    />
  );
};

export default withRouter(EditBookFormContainer);
