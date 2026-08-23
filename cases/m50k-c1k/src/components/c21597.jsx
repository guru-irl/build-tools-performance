import React from 'react';
const LABEL_21597 = 'component_21597';
export function Component21597({ value = 21597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21597, 'data-value': derived.doubled }, children);
}
export default Component21597;
