import React from 'react';
const LABEL_27756 = 'component_27756';
export function Component27756({ value = 27756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27756, 'data-value': derived.doubled }, children);
}
export default Component27756;
