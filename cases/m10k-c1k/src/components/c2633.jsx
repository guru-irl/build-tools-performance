import React from 'react';
const LABEL_2633 = 'component_2633';
export function Component2633({ value = 2633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2633, 'data-value': derived.doubled }, children);
}
export default Component2633;
