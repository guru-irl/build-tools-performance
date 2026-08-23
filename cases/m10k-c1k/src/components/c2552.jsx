import React from 'react';
const LABEL_2552 = 'component_2552';
export function Component2552({ value = 2552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2552, 'data-value': derived.doubled }, children);
}
export default Component2552;
