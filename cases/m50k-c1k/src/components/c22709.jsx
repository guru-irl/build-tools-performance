import React from 'react';
const LABEL_22709 = 'component_22709';
export function Component22709({ value = 22709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22709, 'data-value': derived.doubled }, children);
}
export default Component22709;
