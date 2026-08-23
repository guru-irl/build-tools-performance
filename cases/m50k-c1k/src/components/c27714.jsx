import React from 'react';
const LABEL_27714 = 'component_27714';
export function Component27714({ value = 27714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27714, 'data-value': derived.doubled }, children);
}
export default Component27714;
