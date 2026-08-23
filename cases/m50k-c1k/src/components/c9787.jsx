import React from 'react';
const LABEL_9787 = 'component_9787';
export function Component9787({ value = 9787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9787, 'data-value': derived.doubled }, children);
}
export default Component9787;
