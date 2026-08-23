import React from 'react';
const LABEL_12695 = 'component_12695';
export function Component12695({ value = 12695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12695, 'data-value': derived.doubled }, children);
}
export default Component12695;
