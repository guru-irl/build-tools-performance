import React from 'react';
const LABEL_32495 = 'component_32495';
export function Component32495({ value = 32495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32495, 'data-value': derived.doubled }, children);
}
export default Component32495;
