import React from 'react';
const LABEL_2496 = 'component_2496';
export function Component2496({ value = 2496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2496, 'data-value': derived.doubled }, children);
}
export default Component2496;
