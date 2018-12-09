# ⚙️ Installation

> The easiest way to get up-and-running is with the [Directus Suite](https://github.com/directus/directus), which includes the [Directus API](https://github.com/directus/api), the [Directus App](https://github.com/directus/app), and all dependencies.

## Requirements

Directus supports different stacks, however this guide specifically covers LAMP. Please ensure your server meets the following requirements:

* **Apache**
    * _Other HTTP Servers: [NGINX](#) or [Caddy](#)_
* **MySQL 5.2+**
    * A Database (empty or existing)
    * A Database User (with access to database)
    * _Other SQL Vendors: [MariaDB](#) or [Percona](#)_
* **PHP 7.1+**
    * Extensions:  `pdo`, `mysql`, `curl`, `gd`, `fileinfo`, and `mbstring`

::: tip Detailed Requirements
View our [detailed requirements page](/advanced/suite/requirements.md) to learn more about these requirements, neccesary permissions, and other server-specific prerequisites.
:::

## Setup

Running the following `git` command from your server's command line is the preferred method of installing the codebase.

```bash
git clone https://github.com/directus/directus.git
```

::: tip Other Install Methods
Alternatively, you can choose from one of these other installation methods.
* [Docker](#)
* [Zip, Tar, or FTP](#)
* [Standalone](#)
* [Source](#)
:::

## Configure

1. Set your document root to the `/public` directory
2. Navigate your browser to the App at `/admin`
3. Follow the prompts to complete configuration (see below)

Field          | Description
:------------- | :-----------
Project Name   | The name of your project
Project Key    | For now, only the `_` default is available through the installer
Admin Email    | The email address of your first administrator
Admin Password | The password for your first administrator
Host           | The server/host of your database
Port           | The port for the database (default is 3306)
Database User  | The database user
Database Password | The database user's password
Database Name  | The name of the database
Database Type  | As of now, Directus only supports MySQL

:::tip Manual Configuration
Alternatively, you can [manually configure Directus](/advanced/api/configure.md).
:::

## Logging In

Once you've completed the installer you will automatically be taken to the login page of the Directus App (again, at `/admin`). You can then login with the credentials you provided during configuration, or the default credentials (`admin@example.com` and `password`) if configured manually.

---

👍 You've successfully installed Directus! Now you're ready to [add your first collection](/guides/collections.ms).