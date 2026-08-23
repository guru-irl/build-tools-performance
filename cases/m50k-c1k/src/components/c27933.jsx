import React from 'react';
const LABEL_27933 = 'component_27933';
export function Component27933({ value = 27933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27933, 'data-value': derived.doubled }, children);
}
export default Component27933;
