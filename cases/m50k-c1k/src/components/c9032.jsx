import React from 'react';
const LABEL_9032 = 'component_9032';
export function Component9032({ value = 9032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9032, 'data-value': derived.doubled }, children);
}
export default Component9032;
