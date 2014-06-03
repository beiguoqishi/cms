var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cms'
    },
    port: 3000,
    db: 'mongodb://localhost/cms-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cms'
    },
    port: 3000,
    db: 'mongodb://localhost/cms-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cms'
    },
    port: 3000,
    db: 'mongodb://localhost/cms-production'
  }
};

module.exports = config[env];
