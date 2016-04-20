import styles from './{%=o.exportsLowerCase%}.css';

/**
 * Directive - {%=o.exports%}
 *
 * {%=o.description%}
 *
 * {%=o.ticket%}
 */

export default function {%=o.exportsLowerCase%}() {

  const link = ($scope) => {
    $scope.styles = styles;
  };

  return {
    restrict: 'E',
    link,
    scope: {
      name: '='
    },
    template: require('./{%=o.exportsLowerCase%}.html')
  }
}
