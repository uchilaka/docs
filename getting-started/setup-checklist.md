# ✅ Setup Checklist

> If you're having difficulty getting Directus up-and-running, this setup checklist will help troubleshoot and diagnose issues. Follow each step, in order, and you should be good to go!

:::warning
**This checklist applies to the OS-level requirements for your Directus server**. If you are installing Directus using any of the other installation methods outlined [here](/getting-started/installation.html#setup), you will need to examine your container image (or other system configuration) to ensure these requirements are met.
:::

1. **Check your Server Requirements** — Ensure that your server meets the [minimum Directus requirements](/advanced/requirements.html):

    - Apache 2
    - PHP 7.1+
    - MySQL 5.7+

2. **Check the enabled PHP Extensions on your server** — Ensure that your server has the following PHP extensions enabled:

    - `pdo`
    - `mysql`
    - `curl`
    - `gd`
    - `fileinfo`
    - `mbstring`
    - `xml`

3. **Is `mod_rewrite` enabled for `.htaccess` files?** — We'll include some notes in more detail to walk you through checking this in your Apache configuration file soon (tip: you can review [this guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-mod_rewrite#Section%202) on setting up `mod_rewrite` + `.htaccess`).

4. **Is the root directory of the Directus API set to the `/public` directory?** - More on verifying this soon.

5. **Is the directory ownership set to the web server configured user?** - Usually the user is `www-data`. You can change the ownership of a directory (cascading) using this command:

    ```bash
    # sudo permissions required
    #
    # the -R flag indicates recursive execution of this change (all contents within the directory will also be changed)
    #
    # www-data:www-data means the user AND group owners will be set to www-data i.e. <user>:<group>
    #
    # /var/www/api is our example directory
    sudo chown -R www-data:www-data /var/www/api
    ```

6. **Do the following folders have write permission?**

    - `/logs`
    - `/public/uploads` (or your configured upload directory)

7. **Are you using the [latest release of Directus](https://github.com/directus/directus/releases)?**

8. **Did you run the migration script?** This is especially important if you have upgraded from a previous version. You can run this from the App by navigating to: _Settings > Update Database_. Or run it directly with our [CLI](/guides/cli.html#upgrade-directus-schema) or [API Endpoint](/api/reference.html#update).

9. **Did you install or create the API configuration file?**

9. **Did you install or create the App configuration file?**

10. **Did you get `pong` response from the `/ping` server endpont?**

11. **Are you using the correct API project URL?** More guidance on verifying this soon.

12. **Did you check your logs?**

    - Directus Logs
    - Apache logs
    - PHP logs
    - MySQL logs
    
13. **Did you check [GitHub](https://github.com/directus) for an open issue similar to yours?**

## But I don't see anything about Docker or Containers...

> If you are a docker ninja, feel free to skip this explainer

There are great guides published with our official docker images for the directus [app](https://hub.docker.com/r/directus/app) and [API](https://hub.docker.com/r/directus/api). Those are your best resources for hitting the ground running with the respective containers.

> If you're taking a stab at rolling your own image from the source code for a bespoke use case, here's a brief explainer along with our best wishes (to all explorers & tinkerers out there 🚀🍻 - do [share your journey](https://slack.directus.io/) and any lessons with us)

### So what is Docker, anyway?
Your docker (or Kubernetes) images are made of the same "stuff" as a UNIX based OS environment, just packaged in a container. Docker - and other containerization frameworks are simply faster, meaner virtualization paradigms (think evolution of VMs from of old).

The building blocks for a dockerized implementation are containers, and the raw material those are "made of" are your images. At the image level, these tips will also apply to your docker image composition.

### For example...
If your [use case](/getting-started/use-cases.html) involves using Directus both for your website and as a headless CMS, then you would likely need to deploy both docker images (app & API) as co-dependent containers in your system. You are able to do this with fancy tech like [Docker Compose](https://docs.docker.com/compose/overview/) which gives you Kubenetes-ish levels of cool with standing up all the containers you need in one `docker-compose up` command from your project root.

### In summary (about containers)
If you are implementing a solution for a client or an enterprise, you want to take a look at containers, especially if said client is familiar with modern virtualization technology. It could greatly simpify your speed to market with you brand new Directus CMS.

## Nothing working?

If all of the above fails, you should:

- Ask for help on the `#support` channel of our [Community Slack](https://slack.directus.io/)
- You can also post configuration questions on [StackOverflow](https://stackoverflow.com/search?q=directus)
- Lastly, if this truly seems like a `bug` (not a configuration problem) then report it on GitHub issues for the [API](https://github.com/directus/api/issues/new?template=Bug_report.md) or [App](https://github.com/directus/app/issues/new?template=Bug_report.md).
