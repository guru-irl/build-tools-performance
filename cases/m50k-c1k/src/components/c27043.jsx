import React from 'react';
const LABEL_27043 = 'component_27043';
export function Component27043({ value = 27043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27043, 'data-value': derived.doubled }, children);
}
export default Component27043;
