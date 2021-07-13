import { GraphQLClient } from "graphql-request"; // GraphQL request client

// Create client
const client = new GraphQLClient(
  // Tuli mainnet subgraph
  "https://api.thegraph.com/subgraphs/name/bitbd83/tulisubbsc"
);

// Export client
export default client;
