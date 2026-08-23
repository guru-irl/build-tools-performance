import React from 'react';
const LABEL_9427 = 'component_9427';
export function Component9427({ value = 9427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9427, 'data-value': derived.doubled }, children);
}
export default Component9427;
