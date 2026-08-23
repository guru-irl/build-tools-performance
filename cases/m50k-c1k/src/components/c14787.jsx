import React from 'react';
const LABEL_14787 = 'component_14787';
export function Component14787({ value = 14787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14787, 'data-value': derived.doubled }, children);
}
export default Component14787;
