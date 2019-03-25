# Directus Cloud

> Directus Cloud is our paid content-as-a-service (CaaS) platform. It offers quick setup, auto-updates, a global CDN, and premium support.

## Private Beta

Currenty Directus Cloud is in an invite-only private beta. Below are some use resources for getting started.

## Platform Overview

Directus Cloud has three main levels:

* *Accounts* — Individual Cloud access tied to an email address. (Free)
* *Teams* — A group of accounts with one owner used for consolidated billing. (Free)
* *Projects* — An instance of Directus attached to a Team. (Paid. Cost based on chosen plan.)

## Dashboard

When you log-in to Directus Cloud you will be taken to the Dashbaord. This page will give you a bird's eye view over all your teams and projects.

### Directus Version

You'll never need to worry about keeping Directus up-to-date on Directus Cloud, we automatically update the entire service each week. We intentionally keep the Cloud API 1-2 releases behind the OSS version (except for security patches) to avoid pushing any issues to our paying customers. This way, we're able to collect feedback from hundreds-of-thousands of open-source community members and identify/resolve bugs before they reach Cloud. You can see the current version in the header of the Dashboard.

### System Status

The current Directus Cloud system status is always visible at the top of the dashboard's header. Additionally, all customers will recieve emails reports for outages and resolution.

## Accounts

Directus Cloud accounts are how individuals access the platform. Accounts are free and tied to your email address.

### Requesting Access

Reach out to one of our Core Team members on the [Directus Community Slack](https://slack.directus.io/).

### Logging In

Visit the [beta login page](https://staging.directus.cloud/login) and authenticate with your email and the temporary password given to you by the Core Team.

### Managing Your Account

Clicking on the User Menu (top-right) will open your Account page. Here you can view Account Activity, Pending Team Invites, and Account Settings.

#### Account Activity

Lists all Directus Cloud API activity for your account.

#### Team Invites

Lists any pending Team invites and allows you to accept or reject them.

#### Account Settings

Basic control for your Directus Cloud Account. There are a few sections:

* *Email* — You can _not_ change your account's email address as of now.
* *Name* — You can change your name at any point, this is only used to reference you.
* *Password* — This is only used to login to the Directus Cloud Dashboard, not your Directus Projects.

##### Destroying your Account

Directus has no long-term contracts or commitments, so you can cancel your account at any time. However if you are the owner of any teams you must first destroy them or trasnfer them to a new owner.

## Teams

Teams help organize projects, provide consolidated billing, and allow multiple accounts to have access to the same projects.

### Creating Teams

Simply click the "Create Team" button on the dashbaord homepage and enter a name for your Team. This name is only for reference and can be anything.

### Managing Teams

Clicking on the team's header will open its detail page. Here you can view Team Billing, Members, and Team Settings.

#### Team Billing

This pane shows your total balance/credit, payment methods, and billing history.

##### Adding Payment Methods

Usage during the private beta will _not_ be billed. To avoid getting charged you can use a [testing credit card](https://stripe.com/docs/testing#cards):

* *Card Number* — `4242-4242-4242-4242`
* *Card Expiration* — _Anything in the future_
* *Card CVC* — _Any three digits_

#### Team Members

Here you can see the current members of the team, remove/invite members, and change team ownership.

#### Team Settings

Basic control for your Directus Cloud Team. There are a few sections:

* *Name* — You can change your name at any point, this is only used to label your team in the dashboard.

##### Destroying a Team

You can destroy teams at any time, however you must first destroy all of the team's projects.

## Projects

These are the actual Directus API instances. Each is billed based on the monthly cost of its plan, as well as any plan limit overages.

### Creating Projects

It only takes a few seconds to spin up a new project, simply click on the "Create New Project" button within a Team. Then just give the project a name (you can change this at any point), and choose a monthly plan.

:::tip
Even if you are using a free plan the parent team must have a Payment Method added to cover any potential overage costs.
:::

#### Managing Projects

Clicking on a Project from the Cloud Dashboard will open its detail page. Here you can find: Access, Usage, Resize Options, and Project Settings.

##### Project Access

Once created, you can immediately log-in to it using the [Directus App](https://next.directus.app). Clicking "Launch Directus" will take you to the App and pre-fill your API URL.

:::tip
Remember that your Project Users are different from your Directus Cloud Account!
:::

This pane also includes a list of all Project Users and gives easy access to generate/remove their API Static Access Tokens.

##### Project Usage

This pane shows your billing period as well as information on your project's plan usage and limits.

* *API Requests* — Total API request count for this billing period
* *Bandwidth* — Total API bandwidth for this billing period
* *Users* — Total number of users in this project
* *Collections* — Total number of collections in this project
* *Items* — Total number of items in this project

##### Resizing a Project

At any point you can change your Project's plan by resizing it. Choosing an appropriate plan is a good way to avoid more expensive overage costs.

##### Project Settings

Basic control for your Project. There are a few sections:

* *Name* — You can change your name at any point, this is only used to label your project in the dashboard.

##### Destroying a Project

This action is permanent and can not be undone. All data, files, and users associated with this project will be destroyed. You must type the project's name to confirm your intention to delete it.

## Limitations

If your beta project's usage exceeds the [fair usage limits](https://directus.io/fair-usage.html) we may cancel your beta access. Directus Cloud Beta should not be used in production, we reserve the right to suspend or destroy your account, team, or projects at any time.