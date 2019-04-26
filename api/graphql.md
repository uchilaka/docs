# GraphQL

GraphQL offers many benefits over REST APIs. One of the main benefits is clients have the ability to dictate exactly what they need from the server, and receive that data in a predictable way. 

Directus is offering a GraphQL API which is a wrapper on the current REST API. 
> As GraphQL is in development, it is not yet merged with `master` branch & not being added to releases.


Steps to use:
- Clone the API repo.
- Checkout `graphql` branch.
- Do `composer update`
- Download & install the [GraphiQL](https://electronjs.org/apps/graphiql) tool on your system.
  - It provides the GUI for editing and testing GraphQL queries and mutations.
- Insert your project URL in **GraphQL Endpoint**. Make sure the request type is POST.
  - For example, `<setup_url>/[project]/gql?access_token={token}`
- The tool will list down all the queries.

::: warning Limited Support
Currently supports "Queries" only. "Mutations" & "Subscription" support will be added soon.
:::