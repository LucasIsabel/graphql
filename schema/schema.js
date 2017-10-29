const graph = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graph;
const _ = require('lodash');

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
});

const users = [
  {
    id: '23',
    firstName: 'Lucas',
    age: 23
  }, {
    id: '40',
    firstName: 'Carlos Oliveira',
    age: 35
  }
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: User,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return _.find(users, {
          id: args.id
        })
      }
    }
  }
});

module.exports = new GraphQLSchema({query: RootQuery})