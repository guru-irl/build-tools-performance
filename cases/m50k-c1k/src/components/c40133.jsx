import React from 'react';
const LABEL_40133 = 'component_40133';
export function Component40133({ value = 40133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40133, 'data-value': derived.doubled }, children);
}
export default Component40133;
