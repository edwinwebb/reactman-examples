/*
 * action types
 */

{% for(var i = 0; i < o.actions.length; i++) { %}
export const {%= o.actions[i].toUpperCase() %} = '{%= o.actions[i].toUpperCase() %}';
{% } %}

/*
 * action creators
 */

 {% for(var i = 0; i < o.actions.length; i++) { %}
 export function {%= o.actions[i] %}(input) {
   return { type: {%= o.actions[i].toUpperCase() %}, input }
 }
 {% } %}
