import React from 'react';
const LABEL_27145 = 'component_27145';
export function Component27145({ value = 27145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27145, 'data-value': derived.doubled }, children);
}
export default Component27145;
