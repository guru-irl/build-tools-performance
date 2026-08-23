import React from 'react';
const LABEL_23488 = 'component_23488';
export function Component23488({ value = 23488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23488, 'data-value': derived.doubled }, children);
}
export default Component23488;
