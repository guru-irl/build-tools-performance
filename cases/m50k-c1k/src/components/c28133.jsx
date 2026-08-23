import React from 'react';
const LABEL_28133 = 'component_28133';
export function Component28133({ value = 28133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28133, 'data-value': derived.doubled }, children);
}
export default Component28133;
