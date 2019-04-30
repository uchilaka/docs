# How To Use

[Here is the list](https://graphql.org/code/#javascript-1) of JavaScript libraries available for using GraphQL client side. We'll be using [Vue-Apollo](https://vue-apollo.netlify.com/guide/) which integrates [Apollo](https://www.apollographql.com/) in your Vue components with declarative queries.
Vue-Apollo is recommended because:

1. Can be installed via Vue CLI as a plugin.
2. Jump start the development without lengthy configuration.

### 1. Install & Setup Vue Apollo

```
npm install --save vue-apollo graphql apollo-boost
```

```javascript
import Vue from "vue";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);
```

Follow [this link](https://vue-apollo.netlify.com/guide/installation.html) for more info on Vue-Apollo setup.

### 2. Create Apollo Client & Provider

Generally this should be added into entry file of the project. In most cases it would be `main.js` or `app.js`

```javascript
import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  // Add absolute project URL here:
  // If your setup has multiple projects, use respective key else default should be '_'
  // More info: https://docs.directus.io/api/reference.html#project-prefix
  uri:
    "http://localhost:8888/directus/api/public/<project-key>/gql?access_token=demo"
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
```

### 3. Register Apollo Provider to Vue

```javascript
new Vue({
  el: "#app",
  apolloProvider,
  render: h => h(App)
});
```

You are now ready to use Apollo in your components!

### 4. Query the data

```vue
<template>
  <div class v-html="about.about_us"></div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    about: gql`
      query {
        about(id: 1) {
          about_us
        }
      }
    `
  }
};
</script>
```

[Read more](https://vue-apollo.netlify.com/guide/apollo/) about how to form the query and request data from GraphQL
