# Calindra Frontend - Getting started

## What's this project?

this project is a simple application to search for products, using the [https://mystique-v2-americanas.juno.b2w.io/](https://mystique-v2-americanas.juno.b2w.io/) API and it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

this project requires that you have [Docker](https://docker.com) and [Docker compose](https://docs.docker.com/compose/) installed to run it properly, as well as [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)

## Instalation

at the project's root run: `cp .env.example .env`, and after run `npm install` or similar.

## Available Scripts

In the project directory, you can run:

`docker-compose up (-d)`

_(-d is optional, if you want to run it detached from your terminal instance)_

it will create the container applications, install dependencies and run your frontend container.

after the installation, the application will be avaliable at [http://localhost:3000](http://localhost:3000).
