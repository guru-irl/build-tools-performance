import React from 'react';
const LABEL_27075 = 'component_27075';
export function Component27075({ value = 27075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27075, 'data-value': derived.doubled }, children);
}
export default Component27075;
