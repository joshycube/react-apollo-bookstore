import React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

import BooksRender from "./render";

export const QUERY_BOOKS = gql`
  {
    basket @client {
      items {
        bookId
        title
        price
        author
      }
    }
    books {
      bookId
      title
      price
      author
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($item: Object) @client {
    addItem(item: $item) @client
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($id: Number) @client {
    removeItem(id: $id) @client
  }
`;

export const BooksContainer = () => {
  const result = useQuery(QUERY_BOOKS, {
    suspend: false
  });

  const addItemToBasket = useMutation(ADD_ITEM);
  const removeItemFromBasket = useMutation(REMOVE_ITEM);

  if (result.loading) {
    return <span>Loading...</span>;
  }

  return (
    <BooksRender
      add={addItemToBasket}
      remove={removeItemFromBasket}
      data={result.data}
    />
  );
};

export default BooksContainer;
