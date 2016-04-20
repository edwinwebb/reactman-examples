/*eslint max-len:0, max-statements:0*/
import appService{%=o.exports%} from './index.js';
import * as API_CONSTANTS from '../../constants/api.js';
import * as APP_TEST_CONSTANTS from '../../data-tests/app_constants';

ngDescribe({
  name: 'service tests: {%=o.exports%}',
  modules: [appService{%=o.exports%}],
  inject: ['{%=o.exports%}'],
  tests: function(deps) {

    it('{%=o.exports%} is a function', function() {
      expect(angular.isFunction(deps.{%=o.exports%}.saveData)).toBe(true);
    });

  }
});
