# Filters

To apply filters on the list of items, you can use the `filter` argument.
Filter fields can be defined as `<field-name>_<operator>:<value>`.
The list of available filters can be found [here](/api/reference.html#filtering)

To list down horror movies from `movies` collection, we can apply filter like this:

```
{
  movies(limit: 10, filter: {genre_contains: "horror"}) {
    data {
      name
    }
  }
}
```
