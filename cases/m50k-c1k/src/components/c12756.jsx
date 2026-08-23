import React from 'react';
const LABEL_12756 = 'component_12756';
export function Component12756({ value = 12756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12756, 'data-value': derived.doubled }, children);
}
export default Component12756;
