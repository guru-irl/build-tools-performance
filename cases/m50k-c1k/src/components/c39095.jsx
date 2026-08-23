import React from 'react';
const LABEL_39095 = 'component_39095';
export function Component39095({ value = 39095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39095, 'data-value': derived.doubled }, children);
}
export default Component39095;
