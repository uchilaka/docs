# Extending Directus

> To keep the core codebase as simple and clean as possible, all edge-case functionality is added through extensions. Directus is completely modular and extensible, so you'll never hit a ceiling or outgrow the framework.

## Architecture Explanation

Despite being an App resource, Directus extensions are actually stored in the API codebase/repository. This seems counter-intuitive, but is neccesary because the Directus App supports multitenancy (you can connect to multiple APIs from one App).

If you install a custom interface, like a "Seating Chart", you'll want that interface to be available within your project no matter which App you connect through. Because of this, we store all _custom_ extensions in the API Instance, and to keep things organized, we decided to also serve all _core_ extensions from the same place.

[Learn more about the Extension Architecture](./architecture.md)

## Extension Types

* [Interfaces](./interfaces.md) — Interfaces customize how a field's presentation. For example a `STRING` field type might be shown as a text-input, dropdown, Map, WYSIWYG, or Color Picker. And on the Item Browse page you may want a `BOOLEAN` shown as a `✓` or `×` instead of `true` or `false`.
* [Layouts](./layouts.md) — Layouts are custom designs for the Item Browse page. You can set the layout to different optins based on the data you are viewing. For example you can use the default Listing view for raw data, the Card view for images, or a Calendar view when browsing items by date.
* [Pages](./pages.md) — Pages are a way to add full-featured modules to Directus. You can build page modules for: custom dashboards, reports, point-of-sale systems, or anything else. Each page is protected within the auth gateway and can easily access project data and global variables.
* [Hooks](./hooks.md) — Directus provides event hooks for all actions performed within the App or API. For example, you can run code every time an item is edited within a specific collection. We've also included an example Web Hook which pushes an HTTP callback whenever certain events occur.
* [Custom Endpoints](./custom-endpoints.md) — The Directus API gives you comprehensive access to all content in your database dynamically, but you can add additional endpoints as needed. You can also use API Filters to augment the data returned by our core endpoints.
* [Storage Adapters](./storage-adapters.md) — Storage Adapters allow you to save Directus files anywhere. The default storage adapter is the API server's filesystem, but Directus includes adapters for AWS-S3 and other popular services. Or you can create custom storage adapters to store your assets elsewhere.
* [Auth Providers](./auth-providers.md) — Directus offers built-in authentication using securely hashed passwords. Alternatively, you can enable any of our Single Sing-On (SSO) services or create your own adapter for custom authentication. Directus also supports SCIM for external user management.

::: tip Disabled Extensions
You can include an extension in your project but disable it from being used by prepending its container directory with an underscore (`_`). For example, the demo Page is included in the API codebase but is disabled by default: `api/extensions/core/pages/_demo/`
:::

## Customizing the App

### Custom Scripts

The App includes an empty `/script.js` file where you can add additional functionality to the App. For example you could use this file to add analytics or other trackers to the Directus Application.

### Custom Styles

The Directus Application includes an empty `/style.css` file to override any part of the App with custom styles. Nearly every component in the platform has a class associated with it you can use to tweak the styles.

Most styling related properties in the application are using CSS Custom Properties (variables). These variables can be overwritten in your custom styles file to efficiently change the appearance of the whole app. All variables that can be overwritten can be referenced in the [global styles file](https://github.com/directus/app/blob/master/src/assets/global.scss).

::: tip
If you have a style tweak that would benefit all users of Directus, please consider opening a Pull Request for it!
:::

::: warning
The styles of the actual components in the app are being added to the DOM dynamically. Therefore, to avoid being overwritten by the cascade you'll need to use `!important` in your styles.
:::
