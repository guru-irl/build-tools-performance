import React from 'react';
const LABEL_39495 = 'component_39495';
export function Component39495({ value = 39495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39495, 'data-value': derived.doubled }, children);
}
export default Component39495;
