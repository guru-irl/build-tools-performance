import React from 'react';
const LABEL_21378 = 'component_21378';
export function Component21378({ value = 21378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21378, 'data-value': derived.doubled }, children);
}
export default Component21378;
