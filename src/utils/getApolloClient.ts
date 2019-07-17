import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import apolloSettings from '@/apollo';

import Link from './createApolloLink';

let client: any = null;

/* istanbul ignore else */
if (!client) {
  const cache = new InMemoryCache();
  client = new ApolloClient({
    link: Link,
    cache,
    resolvers: apolloSettings.mutations,
    typeDefs: apolloSettings.typeDefs,
  });

  // Prep the cache with our defaults
  cache.writeData({
    data: apolloSettings.defaults,
  });
}

export default client;
