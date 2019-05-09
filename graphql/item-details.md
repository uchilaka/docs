# Item Details

When you want a specific item based on a primary key, you can pass an `id` as argument. For example if you want to get details of a movie with id `1` from `movies` collection:

```
movies(id: 1) {
  data {
    name
    genre
    status
  }
}
```

::: tip
When you're requesting an item based on primary key, obviously you'll always get a single item. But the response you'll get will always be an array with a single item. This is because how GraphQL & Directus is designed. The GraphQL expects a predefined `types` of a field. So in our case, an **item** or **list of items** will always be an `array`.
:::

A complete example to get details of an item from the `movies` collection:

```vue
<template>
  <div id="app">
    <!-- You should always select `0th` item when you're requesting an item based on primary key -->
    <h1>{{ movies.data[0].name }}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    movies: gql`
      query {
        movies(id: 1) {
          data {
            name
            genre
            status
          }
        }
      }
    `
  }
};
</script>
```
