import React from 'react';
const LABEL_9362 = 'component_9362';
export function Component9362({ value = 9362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9362, 'data-value': derived.doubled }, children);
}
export default Component9362;
