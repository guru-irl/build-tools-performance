import React from 'react';
const LABEL_12170 = 'component_12170';
export function Component12170({ value = 12170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12170, 'data-value': derived.doubled }, children);
}
export default Component12170;
