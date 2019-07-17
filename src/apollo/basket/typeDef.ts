const typeDef = `
  type Item {
    bookId: Int!
    title: String!
    author: String!
    price: Float!
  }
  type Basket {
    items: [Item],
  }
`;

export default typeDef;
