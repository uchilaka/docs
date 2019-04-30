# Configuring GraphQL

GraphQL offers many benefits over REST APIs. One of the main benefits is clients have the ability to dictate exactly what they need from the server, and receive that data in a predictable way.

Directus is offering a GraphQL API which is a wrapper on the current REST API.

> As GraphQL is in development, it is not yet merged with `master` branch & not being added to releases.

::: warning Limited Support
Currently supports "Queries" only. "Mutations" & "Subscription" support will be added soon.
:::

Steps to configure:

- Clone the API repo.
- Checkout `graphql` branch.
- Do `composer update`
- Download & install the [GraphiQL](https://electronjs.org/apps/graphiql) tool on your system.
  - It provides the GUI for editing and testing GraphQL queries and mutations.
- Insert your project URL in **GraphQL Endpoint**. Make sure the request type is POST.
  - For example, `<setup_url>/<project-key>/gql?access_token=demo`
- GraphiQL will list down all the queries.

Once you've setup the GraphQL on server side, you'll need a GraphQL client to prepare a query and send requests. Many different programming languages support GraphQL. [This list](https://graphql.org/code/#graphql-clients) contains some of the popular client libraries.
