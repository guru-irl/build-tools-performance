import React from 'react';
const LABEL_44680 = 'component_44680';
export function Component44680({ value = 44680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44680, 'data-value': derived.doubled }, children);
}
export default Component44680;
