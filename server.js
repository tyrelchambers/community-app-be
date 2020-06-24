import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import expressSanitizer from 'express-sanitizer'
import cors from 'cors'
import models from './db/models/index'
import * as typeDefs from './graphql/schemas.js'

const PORT = process.env.PORT || 3001;
const schema = makeExecutableSchema({
  typeDefs
})

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSanitizer());
app.use(cors())

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

