import React from 'react';
const LABEL_12095 = 'component_12095';
export function Component12095({ value = 12095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12095, 'data-value': derived.doubled }, children);
}
export default Component12095;
