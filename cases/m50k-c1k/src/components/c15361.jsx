import React from 'react';
const LABEL_15361 = 'component_15361';
export function Component15361({ value = 15361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15361, 'data-value': derived.doubled }, children);
}
export default Component15361;
