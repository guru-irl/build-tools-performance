import React from 'react';
const LABEL_27083 = 'component_27083';
export function Component27083({ value = 27083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27083, 'data-value': derived.doubled }, children);
}
export default Component27083;
