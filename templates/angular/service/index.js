import angular from 'angular';

import {%=o.exports%} from './{%=o.exportsLowerCase%}.js';

export default angular.module('app.services{%=o.exports%}', [])
  .service('{%=o.exports%}', {%=o.exports%})
  .name;
