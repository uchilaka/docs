# Hooks

> Directus provides event hooks for all actions performed within the App or API. We've also included an example Web Hook which pushes an HTTP callback whenever certain events occur.

## Action Hooks

Action hooks execute a piece of code _without_ altering the data being passed through it. For example, an Action hook might send an email to a user when an new article is created. Below is a listing of actions that fire an event.

Name                              | Description
--------------------------------- | ------------
`application.boot`                | Before all endpoints are set. The app object is passed.
`application.error`               | An app exception has been thrown. The exception object is passed.
`auth.request:credentials`        | User requested token via credentials. The user object is passed.
`auth.success`                    | User authenticated successfully. The user object is passed.
`auth.fail`                       | User authentication failed. @TODO is passed.
`collection.create`               | Collection is created. Collection's name passed. Supports `:before` and `:after` (default)
`collection.update`               | Collection is updated. Collection's name passed. Supports `:before` and `:after` (default)
`collection.delete`               | Collection is deleted. Collection's name passed. Supports `:before` and `:after` (default)
`field.create`                    | Field is created. You can also limit to a specific collection with `field.create.[collection-name]`. Collection's name (_When not specific to a collection_), Field's name and new data passed. Supports `:before` and `:after` (default)
`field.update`                    | Field is updated. You can also limit to a specific collection with `field.update.[collection-name]`. Collection's name (_When not specific to a collection_), Field's name and data passed. Supports `:before` and `:after` (default)
`field.delete`                    | Field is deleted. You can also limit to a specific collection with `field.delete.[collection-name]`. Collection's name (_When not specific to a collection_), Field's name passed. Supports `:before` and `:after` (default)
`item.create`                     | Item is created. You can also limit to a specific collection using `item.create.[collection-name]`. Item data passed. Supports `:before` and `:after` (default)
`item.read`                       | Item is read. You can also limit to a specific collection using `item.read.[collection-name]`. Item data passed. Supports `:before` and `:after` (default)
`item.update`                     | Item is updated. You can also limit to a specific collection using `item.update.[collection-name]`. Item data passed. Supports `:before` and `:after` (default)
`item.delete`                     | Item is deleted. You can also limit to a specific collection using `item.delete.[collection-name]`. Item data passed. Supports `:before` and `:after` (default)
`file.save`                       | File is saved. File data passed. Supports `:before` and `:after` (default)
`file.delete`                     | File is deleted. File data passed. Supports `:before` and `:after` (default)

:::tip Before or After Event
By default, the hooks above occur _after_ an event has happened. You can append `:before` or `:after` to the end to explicitely specify when the hook should fire.
:::

### Creating an Action Hook

To create a hook, a [callable](http://php.net/manual/en/language.types.callable.php) must be added to a hook name. Below we are using a function.

```php
[
  'hooks' => [
    'actions' => [
      'item.create' => function ($collectionName, array $data) {
        // execute any code
      }
    ]
  ]
];
```

#### Example (Function)

In this example we'll notify an admin user everytime a new article is created.

```php
'hooks' => [
  'actions' => [
    'item.create.articles' => function ($data, $collectionName) {
      $content = 'New article was created with the title: ' . $data['title'];
      // pesudo function
      notify('admin@example.com', 'New Article', $content);
    }
  ]
]
```

#### Example (Class with `__invoke` Method)

You can also use a class that implements the `__invoke` method.

```php
<?php

namespace \App\Events;

class CreateItemEvent
{
    public function __invoke($collectionName, array $data)
    {
        // execute any code
    }
}
```
```php
[
  'hooks' => [
    'actions' => [
      'item.create' => '\App\Events\CreateItemEvent'
    ]
  ];
];
```

#### Example (Class-Method)

You can also create a class-method combination and `HookInterface`.

```php
<?php

// Improvised namespace, not required
namespace \App\Events;

class CreateItemEvent implements \Directus\Hook\HookInterface
{
  public function handle($collectionName, array $data)
  {
    // execute any code
  }
}
```

```php
[
  'hooks' => [
    'actions' => [
      'item.create' => '\App\Events\CreateItemEvent'
    ]
  ]
];
```

## Filter Hooks

Filter hooks are similar to Actions but alter the data that passes through it. For example a Filter hook might set a UUID for a new article before it is stored in the database.

Name                                 | Description
------------------------------------ | ------------
`item.create`                        | Item is created. You can also limit to a specific collection using `item.create.[collection-name]`. Supports `:before` and `:after` (default)
`item.read`                          | Item is read. You can also limit to a specific collection using `item.read.[collection-name]`. Supports `:before` and `:after` (default)
`item.update`                        | Item is updated. You can also limit to a specific collection using `item.update.[collection-name]`. Supports `:before` and `:after` (default)
`response`                           | Before adding the content into the HTTP response body.  You can also limit to a specific collection using `response.[collection-name]`.
`response.[method]`                  | Same as `response` but only executes for a specific http method, such as `GET, POST, DELETE, PATCH, PUT, OPTIONS`. You can also limit to a specific collection using `response.[method].[collection-name]`.

### Creating a Filter Hook

The filter passes a `Payload` object which contains the related data and attribute information such as the collection name the parent item. All filter hooks must also _return_ a `Payload` object parameter so that multiple filters can be chained together.

#### Example (Function)

In this example we'll generate and set a `uuid` right before every article is created.

```php
'hooks' => [
  'filters' => [
    'item.create.articles:before' => function (\Directus\Hook\Payload $payload) {
      $payload->set('uuid', \Directus\generate_uuid4());

      return $payload;
    }
  ]
]
```

#### Useful Methods

Name                    | Description
----------------------- | ------------
`getData()`             | Get the payload data
`attribute($key)`       | Get an attribute key. eg: `$payload->attribute('collection_name')`
`get($key)`             | Get an element by its key
`set($key, $value)`     | Set or update new value into the given key
`has($key)`             | Check whether or not the payload data has the given key set
`remove($key)`          | Remove an element with the given key
`isEmpty()`             | Check whether the payload data is empty
`replace($newDataArray)`| Replace the payload data with a new data array
`clear()`               | Remove all data from the payload

:::tip Dot Notation
`get()` and `has()` method can use dot-notation to access child elements. eg: `get('data.email')`.
:::

::: tip Payload Object
`Payload` object is `Arrayable` which means you can interact with the data as an array `$payload['data']['email]`, but you can't do `\Directus\Util\ArrayUtils::get($payload, 'data.email')`.
:::

:::warning System Collections
Directus _system_ collections also trigger filters, so remember to omit them using `\Directus\Database\Schema\SchemaManager::getSystemCollections()`.

```php
use Directus\Database\Schema\SchemaManager;

$collectionName = $payload->attribute('collection_name');
if (in_array($collectionName, SchemaManager::getSystemCollections())) {
    return $payload;
}
```
:::

## Web Hooks

It is easy to create Web Hooks in Directus. Simply include an HTTP POST that includes the desired data within the event. We've included a [disabled example](https://github.com/directus/api/tree/master/public/extensions/custom/hooks/_webhook) in the codebase to help you get started.

```php
<?php

return [
    'actions' => [
        // Post a web callback when an article is created
        'item.create.articles' => function (array $data) {
            $client = new \GuzzleHttp\Client([
                'base_uri' => 'https://example.com'
            ]);

            $data = [
                'type' => 'post',
                'data' => $data
            ];

            $response = $client->request('POST', 'alert', [
                'json' => $data
            ]);
        }
    ]
];
```
