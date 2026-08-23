import React from 'react';
const LABEL_33002 = 'component_33002';
export function Component33002({ value = 33002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33002, 'data-value': derived.doubled }, children);
}
export default Component33002;
