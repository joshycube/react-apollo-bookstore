import React from "react";
import { withRouter } from "react-router";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

import BasketRender from "./render";

export const QUERY_BASKET = gql`
  {
    basket @client {
      items {
        bookId
        title
        author
        price
      }
    }
  }
`;

const BasketContainer = (props: any) => {
  const result = useQuery(QUERY_BASKET, {
    suspend: false
  });

  if (result.loading) {
    return <span>Loading...</span>;
  }

  return <BasketRender {...props} basket={result.data.basket} />;
};

export default withRouter(BasketContainer);
