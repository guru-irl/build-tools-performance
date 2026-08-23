import React from 'react';
const LABEL_15599 = 'component_15599';
export function Component15599({ value = 15599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15599, 'data-value': derived.doubled }, children);
}
export default Component15599;
