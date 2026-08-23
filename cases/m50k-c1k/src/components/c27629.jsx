import React from 'react';
const LABEL_27629 = 'component_27629';
export function Component27629({ value = 27629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27629, 'data-value': derived.doubled }, children);
}
export default Component27629;
