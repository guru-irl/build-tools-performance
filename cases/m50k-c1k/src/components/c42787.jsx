import React from 'react';
const LABEL_42787 = 'component_42787';
export function Component42787({ value = 42787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42787, 'data-value': derived.doubled }, children);
}
export default Component42787;
