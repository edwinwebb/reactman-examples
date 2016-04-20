/**
 * Split a comma seperated list into an array
 * You can require any transforms you need from your codebase
 *
 * @param  {string} string input
 * @return {array}
 */
function commaListToArray(string) {
  if(string.indexOf(",") === -1) {
    return [string.trim()];
  } else {
    return string.split(",").map(function(s){return s.trim()})
  }
}

module.exports = {
  "templatesFolder" : "./templates/react/",
  "outputFolder" : "./src/",
  "default_script" : "component",
  "scripts" : {
    "action" : {
      "files" : {
        "/action/action.js" : "react-action/{%=o.exportsCamelCase%}.js"
      },
      "script" : [{
        "name": "exports",
        "message": "Exports"
      },{
        "name": "actions",
        "message": "Actions",
        "required": true,
        "default": "",
        "type": "input",
        "filter" : commaListToArray
      }]
    },
    "component" : {
      "files" : {
        "/component/index.js" : "react-component/index.js",
        "/component/component.jsx" : "react-component/{%=o.exportsCamelCase%}.jsx",
        "/component/style.css" : "react-component/{%=o.exportsCamelCase%}.css"
      },
      "script" : [{
        "name": "exports",
        "message": "Exports",
        "default" : "Test One"
      },{
        "name": "props",
        "message": "Props",
        "required": true,
        "default": "prop1,prop2",
        "type": "input",
        "filter" : commaListToArray
      }]
    }
  }
}
