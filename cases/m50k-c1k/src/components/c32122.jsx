import React from 'react';
const LABEL_32122 = 'component_32122';
export function Component32122({ value = 32122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32122, 'data-value': derived.doubled }, children);
}
export default Component32122;
