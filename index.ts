import "reflect-metadata";

import { StarResolver } from "./Star.resolver";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

async function boot() {
  const schema = await buildSchema({
    resolvers: [StarResolver]
  });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

boot();
