import React from 'react';
const LABEL_17100 = 'component_17100';
export function Component17100({ value = 17100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17100, 'data-value': derived.doubled }, children);
}
export default Component17100;
