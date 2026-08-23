import React from 'react';
const LABEL_23046 = 'component_23046';
export function Component23046({ value = 23046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23046, 'data-value': derived.doubled }, children);
}
export default Component23046;
