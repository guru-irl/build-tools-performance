import React from 'react';
const LABEL_29731 = 'component_29731';
export function Component29731({ value = 29731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29731, 'data-value': derived.doubled }, children);
}
export default Component29731;
