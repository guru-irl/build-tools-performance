import React from 'react';
const LABEL_22731 = 'component_22731';
export function Component22731({ value = 22731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22731, 'data-value': derived.doubled }, children);
}
export default Component22731;
