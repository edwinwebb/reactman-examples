function variableName(i) {
  var exp = /^[a-zA-Z][a-zA-Z0-9]*?$/;
  var pass = exp.test(i);

  if(pass) {
    return true;
  } else {
    return "Invalid variable name, please try again...";
  }
}

function prependJIRA(i) {
  return "PROJ1-" + i;
}

module.exports = {
  "templatesFolder" : "./templates/angular/",
  "outputFolder" : "./src/",
  "issue_tracker" : "https://myproject.atlassian.net/browse",
  "default_script" : "directive",
  "scripts" : {
    "directive" : {
      "files" : {
        "./directive/directive.css" : "angular-directives/{%=o.exportsLowerCase%}.css",
        "./directive/directive.js" : "angular-directives/{%=o.exportsLowerCase%}.directive.js",
        "./directive/directive.html" : "angular-directives/{%=o.exportsLowerCase%}.html",
        "./directive/index.js" : "angular-directives/{%= 'index.js' %}"
      },
      "script" : [{
        "name": "exports",
        "message": "Exports (directive name)",
        "required": true,
        "default": "Exports",
        "type": "input",
        "validate" : variableName
      }, {
        "name": "description",
        "message": "Short Description",
        "default": "An angular component",
        "required": true,
        "type": "input"
      }, {
        "name": "ticket",
        "message": "JIRA ID",
        "default": "101",
        "required": false,
        "type": "input",
        "filter" : prependJIRA
      }]
    },
    "service" : {
      "files" : {
        "./service/service.js" : "angular-services/{%=o.exportsLowerCase%}.js",
        "./service/index.js" : "angular-services/{%= 'index.js' %}",
        "./service/service.test.js" : "angular-services/{%=o.exportsLowerCase%}.test.js"
      },
      "script" : [{
        "name": "exports",
        "message": "Exports (service name)",
        "required": true,
        "default": "Exports",
        "type": "input",
        "validate" : variableName
      }, {
        "name": "description",
        "message": "Description",
        "default": "An angular service",
        "required": true,
        "type": "input"
      }, {
        "name": "ticket",
        "message": "JIRA ID",
        "default": "123",
        "required": false,
        "type": "input",
        "filter" : prependJIRA
      }]
    }
  }
}
