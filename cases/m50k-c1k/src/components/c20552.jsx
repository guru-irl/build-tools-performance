import React from 'react';
const LABEL_20552 = 'component_20552';
export function Component20552({ value = 20552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20552, 'data-value': derived.doubled }, children);
}
export default Component20552;
