import React from 'react';
const LABEL_2453 = 'component_2453';
export function Component2453({ value = 2453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2453, 'data-value': derived.doubled }, children);
}
export default Component2453;
