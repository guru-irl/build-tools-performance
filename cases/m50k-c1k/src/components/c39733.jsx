import React from 'react';
const LABEL_39733 = 'component_39733';
export function Component39733({ value = 39733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39733, 'data-value': derived.doubled }, children);
}
export default Component39733;
