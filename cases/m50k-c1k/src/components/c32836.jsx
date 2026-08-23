import React from 'react';
const LABEL_32836 = 'component_32836';
export function Component32836({ value = 32836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32836, 'data-value': derived.doubled }, children);
}
export default Component32836;
