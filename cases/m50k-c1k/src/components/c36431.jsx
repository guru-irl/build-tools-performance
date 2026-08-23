import React from 'react';
const LABEL_36431 = 'component_36431';
export function Component36431({ value = 36431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36431, 'data-value': derived.doubled }, children);
}
export default Component36431;
