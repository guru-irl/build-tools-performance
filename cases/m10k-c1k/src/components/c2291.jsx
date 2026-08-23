import React from 'react';
const LABEL_2291 = 'component_2291';
export function Component2291({ value = 2291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2291, 'data-value': derived.doubled }, children);
}
export default Component2291;
