import gql from "graphql-tag";

import { IBook } from "@/components/books/type";
import { IBasket } from "./type";

export const QUERY_BASKET = gql`
  {
    basket @client {
      items {
        bookId
        title
        price
        author
      }
    }
  }
`;

const mutations = {
  addItem: (
    _: any,
    { item }: { item: IBook },
    {
      cache
    }: {
      cache: {
        writeData: (params: {}) => void;
        readQuery: (params: {}) => {
          basket: IBasket;
        };
      };
    }
  ) => {
    const storedItems = cache.readQuery({ query: QUERY_BASKET });
    cache.writeData({
      data: {
        basket: {
          __typename: "BasketItems",
          items: [...storedItems.basket.items, item]
        }
      }
    });
  },

  removeItem: (
    _: any,
    { id }: { id: number },
    {
      cache
    }: {
      cache: {
        writeData: (params: {}) => void;
        readQuery: (params: {}) => {
          basket: IBasket;
        };
      };
    }
  ) => {
    const storedItems = cache.readQuery({ query: QUERY_BASKET });
    cache.writeData({
      data: {
        basket: {
          __typename: "BasketItems",
          items: storedItems.basket.items.filter(
            (item: IBook) => item.bookId !== id
          )
        }
      }
    });
  }
};

export default mutations;
