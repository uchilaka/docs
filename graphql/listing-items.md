# Listing Items

<!-- ### Formatting the collection names

While Directus REST API uses `snake_case` for collection names, the GraphQL standard is to use `camelCase` in queries. So if you have a collection named `member_favorites` it should be queried as `memberFavorites`. -->

### Formatting the collection names

To get the collection of items, the field name should be like: `<collection-name>_collection`
<br>For example, if you have a collection named `movies` and you want to list down all the movies, the query should be:

```
movies_collection(limit:10) {
  data {
    name
  }
  meta {
    result_count
    total_count
  }
}
```

Here the `data` is an array containing all the items while `meta` has the metadata about the items being displayed. The response format is same as the REST API so you can add queries in GraphQL which is supported in REST API.

### Arguments

Collection supports following 3 arguments.

- limit: Limits the number of items per page.
- offset: To skip the number of items multiplied by limit from start
- filter: To list specific items based on their values. [Read More](./filters)

A complete example to list down items from the `movies` collection:

```vue
<template>
  <div id="app">
    <ul>
      <li v-for="item in movies_collection.data">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    movies_collection: gql`
      query {
        movies_collection(limit: 10) {
          data {
            name
          }
          meta {
            result_count
            total_count
          }
        }
      }
    `
  }
};
</script>
```
