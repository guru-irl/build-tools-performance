import React from 'react';
const LABEL_3208 = 'component_3208';
export function Component3208({ value = 3208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3208, 'data-value': derived.doubled }, children);
}
export default Component3208;
