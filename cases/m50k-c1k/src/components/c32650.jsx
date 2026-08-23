import React from 'react';
const LABEL_32650 = 'component_32650';
export function Component32650({ value = 32650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32650, 'data-value': derived.doubled }, children);
}
export default Component32650;
