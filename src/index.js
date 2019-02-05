import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import Pages from './pages';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://apollo-api-ony170a0j.now.sh/'
});

const client = new ApolloClient({
  cache,
  link
});

// client
//   .query({
//     query: gql`
//       query GetLaunch {
//         launch(id: 56) {
//           id
//           mission {
//             name
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>, document.getElementById('root'));