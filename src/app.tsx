import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import "normalize.css";

import ApolloClient from "@/utils/getApolloClient";
import AppWrapper from "./components/appWrapper";
import Routes from "./routes";

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <ApolloProviderHooks client={ApolloClient}>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </ApolloProviderHooks>
  </ApolloProvider>
);

export default App;
