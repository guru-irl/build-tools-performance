import React from 'react';
const LABEL_9093 = 'component_9093';
export function Component9093({ value = 9093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9093, 'data-value': derived.doubled }, children);
}
export default Component9093;
