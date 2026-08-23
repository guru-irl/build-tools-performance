import React from 'react';
const LABEL_27878 = 'component_27878';
export function Component27878({ value = 27878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27878, 'data-value': derived.doubled }, children);
}
export default Component27878;
