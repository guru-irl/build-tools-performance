import React from 'react';
const LABEL_2731 = 'component_2731';
export function Component2731({ value = 2731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2731, 'data-value': derived.doubled }, children);
}
export default Component2731;
