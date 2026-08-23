import React from 'react';
const LABEL_33731 = 'component_33731';
export function Component33731({ value = 33731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33731, 'data-value': derived.doubled }, children);
}
export default Component33731;
