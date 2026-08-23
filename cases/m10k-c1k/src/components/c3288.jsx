import React from 'react';
const LABEL_3288 = 'component_3288';
export function Component3288({ value = 3288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3288, 'data-value': derived.doubled }, children);
}
export default Component3288;
