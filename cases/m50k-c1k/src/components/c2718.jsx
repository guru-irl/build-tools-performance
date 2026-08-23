import React from 'react';
const LABEL_2718 = 'component_2718';
export function Component2718({ value = 2718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2718, 'data-value': derived.doubled }, children);
}
export default Component2718;
