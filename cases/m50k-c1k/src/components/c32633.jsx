import React from 'react';
const LABEL_32633 = 'component_32633';
export function Component32633({ value = 32633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32633, 'data-value': derived.doubled }, children);
}
export default Component32633;
