import React from 'react';
const LABEL_2378 = 'component_2378';
export function Component2378({ value = 2378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2378, 'data-value': derived.doubled }, children);
}
export default Component2378;
