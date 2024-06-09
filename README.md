## Summary
Basic project for learning purposes.

For now:
A basic NestJS application with typescript. Including the following:
 - A route to return a 'Hello World!' using GraphQL.
 - A route to return a 'Hello World!' using gRPC.

## How to run:
For requisites refer to official documentation:
[NestJS](https://docs.nestjs.com/)
[GraphQL](https://graphql.org/learn/)
[Apollo GraphQL](https://www.apollographql.com/docs/)
[gRPC](https://grpc.io/docs/) 


Run on a terminal:
`yarn install`
`yarn start`

Send a request to `http://localhost:3000/graphql`
with query
`
{
  sayHello
}
`
