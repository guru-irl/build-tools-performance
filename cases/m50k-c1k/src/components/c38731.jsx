import React from 'react';
const LABEL_38731 = 'component_38731';
export function Component38731({ value = 38731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38731, 'data-value': derived.doubled }, children);
}
export default Component38731;
