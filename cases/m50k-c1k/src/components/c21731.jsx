import React from 'react';
const LABEL_21731 = 'component_21731';
export function Component21731({ value = 21731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21731, 'data-value': derived.doubled }, children);
}
export default Component21731;
