import React from 'react';
const LABEL_27919 = 'component_27919';
export function Component27919({ value = 27919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27919, 'data-value': derived.doubled }, children);
}
export default Component27919;
