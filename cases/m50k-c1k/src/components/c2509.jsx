import React from 'react';
const LABEL_2509 = 'component_2509';
export function Component2509({ value = 2509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2509, 'data-value': derived.doubled }, children);
}
export default Component2509;
