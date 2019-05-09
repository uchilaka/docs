# Listing Items

You can get a set of items from a particular collection.
<br>For example, if you want to list down all the movies from the `movies` collection, the query should be:

```
movies(limit:10) {
  data {
    name
  }
  meta {
    result_count
    total_count
  }
}
```

Here the `data` is an array containing all the items while `meta` has the metadata about the items being displayed. The response format is same as the REST API so you can add queries in GraphQL which is supported in REST API. Read more about meta [here.](/api/reference.html#metadata)

### Arguments

Collection supports following 3 arguments.

- limit: Limits the number of items per page.
- offset: To skip the number of items multiplied by limit from start.
- filter: To list specific items based on their values. [Read More](./filters.html)
- id: To get a specific item with primary key. [Read More](./item-details.html).

A complete example to list down items from the `movies` collection:

```vue
<template>
  <div id="app">
    <ul>
      <li v-for="item in movies.data">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    movies: gql`
      query {
        movies(limit: 10) {
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
