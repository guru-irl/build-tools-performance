import React from 'react';
const LABEL_2485 = 'component_2485';
export function Component2485({ value = 2485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2485, 'data-value': derived.doubled }, children);
}
export default Component2485;
