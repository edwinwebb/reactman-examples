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
  "templatesFolder" : "./templates/pixi/",
  "outputFolder" : "./src/",
  "scripts" : {
    "displayobject" : {
      "files" : {
        "displayobject.js" : "displayobjects/{%=o.exports%}.js"
      },
      "script" : [{
        "name": "exports",
        "message": "Exports",
        "required": true,
        "default": "Exports",
        "type": "input"
      }, {
        "name": "extendpixi",
        "message": "Extend Pixi.js?",
        "default": true,
        "required": true,
        "type": "confirm"
      }, {
        "name": "extends",
        "message": "Extends",
        "default": "Extends",
        "required": true,
        "type": "input"
      }, {
        "name": "description",
        "message": "Description",
        "default": "A display object",
        "required": true,
        "type": "input"
      }, {
        "name": "functions",
        "message": "Comma seperated list of functions",
        "default": "",
        "required": false,
        "type": "input",
        "filter" : commaListToArray
      }]
    }
  }
}
