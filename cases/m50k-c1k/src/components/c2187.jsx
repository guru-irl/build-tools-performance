import React from 'react';
const LABEL_2187 = 'component_2187';
export function Component2187({ value = 2187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2187, 'data-value': derived.doubled }, children);
}
export default Component2187;
