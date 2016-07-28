requirejs.config({
  "baseUrl": "node_modules",
  "paths": {
    "app": "../js/app",
    "jquery": 'jquery/dist/jquery.min',
    'bootstrap': 'bootstrap/dist/bootstrap.min'
  },
  "shim": {
    "bootstrap": ["jquery"]
  }
});

require(['app/main']);
