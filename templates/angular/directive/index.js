import angular from 'angular';
import {%=o.exportsLowerCase%} from './{%=o.exportsLowerCase%}.directive';

export default angular.module('directives.{%=o.exportsLowerCase%}', [])
  .directive('{%=o.exportsLowerCase%}', {%=o.exportsLowerCase%})
  .name;
