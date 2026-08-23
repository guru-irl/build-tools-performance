import React from 'react';
const LABEL_27121 = 'component_27121';
export function Component27121({ value = 27121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27121, 'data-value': derived.doubled }, children);
}
export default Component27121;
