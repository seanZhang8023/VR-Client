# Kandy Live Support Package - Agent

### Development Dependencies

1. NodeJS
  * Go to https://nodejs.org/ and install.
2. Make sure `npm` is on your PATH. Test by running command `npm` to see if it's recognized.
3. Gulp
  * Run `npm install gulp -g`
4. Install dependencies from `package.json`
  * Run `npm install` and all dependencies should be installed locally.

### Tasks

` gulp serve ` to serve the application.

` gulp test ` to run unit tests in `tests/` and rerun on changes.

` gulp build ` to build the application for production.

Otherwise, can run other gulp tasks from `tasks/` with `gulp taskName`.

### Sample User to login is :

```
username - testuser0
password - qweqwe123!
```

### Code Style -

`https://github.com/airbnb/javascript/tree/master/react`

### Install MongoDB

Make sure Homebrew is installed.

1. brew update
2. brew install mongodb
3. Start the mongodb server by typing `mongod`
4. Type `mongo` on the command line to start the mongoDB console
5. Enter `use database-name` to use the database defined. In our case it is `kandy-lsp-agent`
6. To fetch and save the agents of the Project in the database run `gulp fetch-agents`

### For Heroku Deployment -

* Set the buildpack as `https://github.com/Amandeepsinghghai/heroku-buildpack-nodejs.git` for the project so that the kandy modules are downloaded.
* You can do this using `heroku buildpacks:set https://github.com/Amandeepsinghghai/heroku-buildpack-nodejs.git`


```# VR-Client
# VR-Client
