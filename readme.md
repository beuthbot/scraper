# Scraper Doku

> Web Scraper to request data via an REST API that is not provided through an API

## Table of content

TODO

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need a current version of [_node_ & _npm_](https://nodejs.org/en/).

### Cloning

Get the source code by cloning its [repository](https://github.com/T0biWan/scrape-js).

### Installing

After cloning the repository, install the dependencies. You can then run the project.

```bash
# install dependencies
npm install

# serve at localhost:8000
npm start
```

## Overview

The bot is basically a _Node_-_Express_-Backend. Incoming requests are checked and specifically handled.

## Structure

The bot is separated into two files. `index.js` contains the fundamental logic. At the moment there is only one ressource but we expect to expand this with more ressources. A ressource is represented by a _route_. If the user request the lists of study rooms at our university, the script notices the request at the specified route and prepares a _JSON_ response.

The second script, `scrape.js`, takes care of the actual web scraping. The given URL is requested with _axios_ and then parsed with _cheerio_.

## Functionalities

### Study Rooms

When the resource is requested we scrape the [ASTA Website]('https://asta.studis-bht.de/service/lernraeume/') and try to return a list of available rooms, that are provided for students, from our university.

## Further Development

Add a new route for every ressource in `index.js` and prepare functions in `scrape.js` to scrape the requested data from given Websites.

## Built With

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Cheerio](https://github.com/cheeriojs/cheerio)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/T0biWan/scrape-js/tags).

## Authors

- **Tobias Klatt** - _Initial work_ - [GitHub](https://github.com/T0biWan/)

See also the list of [contributors](https://github.com/T0biWan/scrape-js/graphs/contributors) who participated in this project.
