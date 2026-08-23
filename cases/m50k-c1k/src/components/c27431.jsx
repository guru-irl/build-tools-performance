import React from 'react';
const LABEL_27431 = 'component_27431';
export function Component27431({ value = 27431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27431, 'data-value': derived.doubled }, children);
}
export default Component27431;
