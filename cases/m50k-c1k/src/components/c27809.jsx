import React from 'react';
const LABEL_27809 = 'component_27809';
export function Component27809({ value = 27809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27809, 'data-value': derived.doubled }, children);
}
export default Component27809;
