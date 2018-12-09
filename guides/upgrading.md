# Upgrading

Each new release of Directus comes with migration files that make upgrading as easy as possible. The standard upgrade process is as follows:

1. Navigate (`cd`) to the root diretory of Directus
2. Run `git pull origin` to get the latest code
3. Run `bin/directus db:upgrade` to update your database with the migration script
    * You can also run the migration script by clicking: _Settings > Upgrade_

::: tip Other Upgrade Methods
Please refer to these specific update guide if you used an alternate method when installing.
* Docker
* Zip, Tar, or FTP
* Standalone
* Source
:::

::: tip Versionless API
The Directus API is "versionless", which means that new releases will only include fixes and improvements, but no deprecations or breaking changes.
:::

::: warning Legacy Upgrades
Directus 7 is a major release with significant breaking changes from previous versions. Therefore there is no automated way to migrate your settings and configuration from v6 to v7. However, because Directus stores your content as pure SQL, that data is always portable between versions. [Learn More About Legacy Upgrades](/advanced/suite/legacy-upgrades.md)
:::

## Which version am I using?

You can see your App version by hovering over "Powered by Directus" at the bottom of the Login page. The API and App versions are also included in the response from the [Server Information endpoint](/api/reference#information) (located at `/`).
