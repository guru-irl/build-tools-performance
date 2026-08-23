import React from 'react';
const LABEL_20093 = 'component_20093';
export function Component20093({ value = 20093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20093, 'data-value': derived.doubled }, children);
}
export default Component20093;
