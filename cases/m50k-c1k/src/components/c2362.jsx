import React from 'react';
const LABEL_2362 = 'component_2362';
export function Component2362({ value = 2362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2362, 'data-value': derived.doubled }, children);
}
export default Component2362;
