const typeDef = `
  type Item {
    bookId: Int!
    title: String!
    price: Float!
    author: String!
  }
  type Basket {
    items: [Item],
  }
`;

export default typeDef;
