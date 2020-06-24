import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    uuid: ID!
    profilePicture: String
    firstName: String
    lastName: String
    email: String
    password: String
    username: String
  }

  type Page {
    uuid: ID!
    bannerImg: String
    pageTitle: String
    facebook: String
    twitter: String
    instagram: String
    stitcher: String
    applePodcasts: String
    googlePodcasts: String
    teespringActive: Boolean
    teespringId: String
    user: User
  }

  type Post {
    uuid: ID!
    likes: Int
    dislikes: Int
    message: String
    createdAt: String
    page: Page
  }

  type Query {
    me: User
    pages: [Page]!
  }
`;

module.exports = typeDefs;

