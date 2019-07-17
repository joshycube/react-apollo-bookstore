import Basket from "./basket";

export default {
  defaults: { basket: Basket.defaults },
  mutations: { Mutation: { ...Basket.mutations } },
  typeDefs: `${Basket.typeDef}`
};
