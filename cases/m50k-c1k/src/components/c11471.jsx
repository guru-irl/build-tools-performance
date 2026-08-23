import React from 'react';
const LABEL_11471 = 'component_11471';
export function Component11471({ value = 11471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11471, 'data-value': derived.doubled }, children);
}
export default Component11471;
