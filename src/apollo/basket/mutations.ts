import gql from "graphql-tag";

export const QUERY_BASKET = gql`
  {
    basket @client {
      items {
        id
      }
    }
  }
`;

const mutations = {
  addItem: (
    _: any,
    { item }: { item: any },
    {
      cache
    }: {
      cache: {
        writeData: (params: {}) => void;
        readQuery: (params: {}) => {
          basket: any;
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
    { id }: { id: string },
    {
      cache
    }: {
      cache: {
        writeData: (params: {}) => void;
        readQuery: (params: {}) => {
          basket: any;
        };
      };
    }
  ) => {
    const storedItems = cache.readQuery({ query: QUERY_BASKET });
    cache.writeData({
      data: {
        basket: {
          __typename: "BasketItems",
          items: storedItems.basket.items.filter((item: any) => item.id !== id)
        }
      }
    });
  }
};

export default mutations;
