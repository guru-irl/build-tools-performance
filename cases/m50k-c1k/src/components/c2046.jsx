import React from 'react';
const LABEL_2046 = 'component_2046';
export function Component2046({ value = 2046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2046, 'data-value': derived.doubled }, children);
}
export default Component2046;
