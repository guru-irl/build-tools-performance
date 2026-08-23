import React from 'react';
const LABEL_27599 = 'component_27599';
export function Component27599({ value = 27599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27599, 'data-value': derived.doubled }, children);
}
export default Component27599;
