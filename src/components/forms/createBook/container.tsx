import React from "react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import CreateBookFormComponent from "./component";

export const UPDATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
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
}

export const CreateBookFormContainer = ({ history: { goBack } }: IProps) => {
  const updateBook = useMutation(UPDATE_BOOK);

  return <CreateBookFormComponent updateBook={updateBook} goBack={goBack} />;
};

export default withRouter(CreateBookFormContainer);
