import React from 'react';
const LABEL_2497 = 'component_2497';
export function Component2497({ value = 2497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2497, 'data-value': derived.doubled }, children);
}
export default Component2497;
