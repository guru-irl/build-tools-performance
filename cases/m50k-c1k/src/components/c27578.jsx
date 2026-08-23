import React from 'react';
const LABEL_27578 = 'component_27578';
export function Component27578({ value = 27578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27578, 'data-value': derived.doubled }, children);
}
export default Component27578;
