import React from 'react';
const LABEL_22007 = 'component_22007';
export function Component22007({ value = 22007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22007, 'data-value': derived.doubled }, children);
}
export default Component22007;
