import React from 'react';
const LABEL_2599 = 'component_2599';
export function Component2599({ value = 2599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2599, 'data-value': derived.doubled }, children);
}
export default Component2599;
