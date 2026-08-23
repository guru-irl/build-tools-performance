import React from 'react';
const LABEL_27478 = 'component_27478';
export function Component27478({ value = 27478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27478, 'data-value': derived.doubled }, children);
}
export default Component27478;
