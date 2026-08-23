import React from 'react';
const LABEL_39697 = 'component_39697';
export function Component39697({ value = 39697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39697, 'data-value': derived.doubled }, children);
}
export default Component39697;
