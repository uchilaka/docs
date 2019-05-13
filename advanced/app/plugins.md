# Plugins

## Lodash

Lodash is globally available in the browser. It's accessible under the `_` name:

```js
{
  computed: {
    fields() {
      return _.keyBy(this.fields, "field");
    }
  }
}
```

## Directus SDK

Accessing the API is done through the Directus JavaScript SDK. The whole SDK is available in the `$api` property:

```js
{
  created() {
    this.$api.getItems("projects")
      .then(res => res.data)
      .then(fields => {
        this.fields = fields;
        this.loading = false;
      });
  }
}
```

::: tip
For more info on using the SDK, checkout [Working with the API](#)
:::

## Notifications

You can use [Notyf](https://github.com/caroso1222/notyf) To show notifications / alerts on screen. Notyf is available in the `$notify` key:

```js
{
  methods: {
    save() {
      // ...

      this.$notify.confirm("Saved succesfully!");
    }
  }
}
```
