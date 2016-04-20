import React from 'react';
import ClassNames from 'classnames';

export default class {%=o.exportsSlug%} extends React.Component {

  static propTypes = {
    {% for(var i = 0; i < o.props.length; i++) { %}
    {%= o.props[i] %}: PropTypes.any,{% } %}
  };

  static defaultProps = {
    {% for(var i = 0; i < o.props.length; i++) { %}
    {%= o.props[i] %}: 'default_value',{% } %}
  };

  constructor() {
    super();
  }

  render() {

    cost style = ClassNames({
      [styles.root]: true
    });

    return (
      <div className={style}>
        {%=o.exports%}
      </div>
    );
  }
}
