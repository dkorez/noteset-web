# Noteset App
Noteset is a simple application to edit and organize notes. The goal of this project is to research and implement new technologies using Java Spring Boot and Angular frameworks.\
Demo is available at [https://noteset-app.dkorez.dev](https://noteset-app.dkorez.dev)\
Please note that this project is still in early phase and some important features like user registration and propper database connection are not implemented yet.

This application is split into two parts, that is [Noteset API](https://github.com/dkorez/noteset-api) and [Noteset web](https://github.com/dkorez/noteset-web).

## Noteset web
noteset-web is the frontend application for the noteset project. It is writen in Angular framework and uses Angular Material and Tailwind CSS framework.\
This application connects to [noteset-api](https://github.com/dkorez/noteset-api) to manipulate data.

### Requirements
- NodeJs
- Angluar CLI

### Getting started
- make sure you have noteset-api running
- edit configuration in environment.ts
- set NOTESET_API_URL to point to noteset-api url

Install required dependencies with the following command:\
`npm install`\
Then start application with the following command:\
`ng serve`\
visit application on http://localhost:4200

To build the application, use the following command:\
`ng build` \
artifacts will be stored in `dist` folder

### To do:
- user registration
- UI tweaks
