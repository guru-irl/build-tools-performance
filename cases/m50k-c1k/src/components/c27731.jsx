import React from 'react';
const LABEL_27731 = 'component_27731';
export function Component27731({ value = 27731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27731, 'data-value': derived.doubled }, children);
}
export default Component27731;
