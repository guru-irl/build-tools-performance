import React from 'react';
const LABEL_21416 = 'component_21416';
export function Component21416({ value = 21416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21416, 'data-value': derived.doubled }, children);
}
export default Component21416;
