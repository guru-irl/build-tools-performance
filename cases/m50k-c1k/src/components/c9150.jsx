import React from 'react';
const LABEL_9150 = 'component_9150';
export function Component9150({ value = 9150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9150, 'data-value': derived.doubled }, children);
}
export default Component9150;
