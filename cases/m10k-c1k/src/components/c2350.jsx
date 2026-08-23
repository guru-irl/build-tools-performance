import React from 'react';
const LABEL_2350 = 'component_2350';
export function Component2350({ value = 2350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2350, 'data-value': derived.doubled }, children);
}
export default Component2350;
