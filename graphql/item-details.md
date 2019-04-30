# Item Details

When you're querying an item, you should use its collection name as field name and use `id` as argument. For example if you want to get details of a movie with id `1` from `movies` collection:

```
movies(id: 1) {
  name
  genre
  status
}
```

A complete example to get details of an item from the `movies` collection:

```vue
<template>
  <div id="app">
    <h1>{{ movies.name }}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    movies: gql`
      query {
        movies(id: 1) {
          name
          genre
          status
        }
      }
    `
  }
};
</script>
```
