import React from 'react';
const LABEL_3251 = 'component_3251';
export function Component3251({ value = 3251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3251, 'data-value': derived.doubled }, children);
}
export default Component3251;
