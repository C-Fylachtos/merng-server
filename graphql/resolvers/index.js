const postResolvers = require("./posts");
const usersResolvers = require("./users");
const commentsesolvers = require("./comments");

module.exports = {
  //Every time we call a query or mutation with post the modifiers below are applied! cool!
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentsesolvers.Mutation,
  },
  Subscription: {
    ...postResolvers.Subscription,
  },
};
