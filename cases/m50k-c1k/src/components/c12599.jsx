import React from 'react';
const LABEL_12599 = 'component_12599';
export function Component12599({ value = 12599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12599, 'data-value': derived.doubled }, children);
}
export default Component12599;
