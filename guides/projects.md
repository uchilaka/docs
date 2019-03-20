# Projects

> Each project represents a database. Projects can be used to organize different application schemas or environments.

## Multitenancy

Directus allows for one instance of the API/App to manage any number of project databases. Each project has its own database and is configured in its dedicated API config file, where all options can be configured.

::: tip
[View all project options available within the API configuration.](/advanced/api/configuration.html#config-file-options)
:::

::: tip
[Learn how to connect to your different project APIs.](/api/reference.html#project-prefix)
:::

## Creating a New Project

1. Create a new database and database user
1. Create a new API config file
1. Add the API URL to your App config file
1. Run the Directus Installer or manually setup

## Deleting a Project

As of now, this can only be done manually.

1. Delete the project's database
1. Delete the project's API config file
1. Delete the project from your App's config file
1. Delete any files in that project's storage adapter

## Linking to a Project

Since Directus is multitenant, you need a way to link to specific projects. This is accomplished by adding a project query parameter to the login page containing a base64 encoded URL of the API you want to use, the application will automatically select "Other" (if allowed) and pre-fill the API URL.

```
https://directus.app/#/login?project=aHR0cHM6Ly9hcGkuZGlyZWN0dXMuY2xvdWQvZGNFeEFNcGxFYVBJLw==
```
