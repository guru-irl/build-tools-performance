import React from 'react';
const LABEL_27941 = 'component_27941';
export function Component27941({ value = 27941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27941, 'data-value': derived.doubled }, children);
}
export default Component27941;
