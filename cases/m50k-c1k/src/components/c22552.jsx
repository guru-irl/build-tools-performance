import React from 'react';
const LABEL_22552 = 'component_22552';
export function Component22552({ value = 22552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22552, 'data-value': derived.doubled }, children);
}
export default Component22552;
