import React from 'react';
const LABEL_2495 = 'component_2495';
export function Component2495({ value = 2495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2495, 'data-value': derived.doubled }, children);
}
export default Component2495;
