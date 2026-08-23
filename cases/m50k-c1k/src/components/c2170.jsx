import React from 'react';
const LABEL_2170 = 'component_2170';
export function Component2170({ value = 2170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2170, 'data-value': derived.doubled }, children);
}
export default Component2170;
