import React from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

function ShowForces() {
  const { loading, error, data } = useQuery(gql`
    {
      Forces {
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.Forces.map(({name}, i) => (
    <div key={i}>
      <p>
        {name}
      </p>
    </div>
  ));
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ShowForces />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
