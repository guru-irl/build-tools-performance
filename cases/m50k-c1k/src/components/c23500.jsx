import React from 'react';
const LABEL_23500 = 'component_23500';
export function Component23500({ value = 23500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23500, 'data-value': derived.doubled }, children);
}
export default Component23500;
