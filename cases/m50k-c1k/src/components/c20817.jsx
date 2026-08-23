import React from 'react';
const LABEL_20817 = 'component_20817';
export function Component20817({ value = 20817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20817, 'data-value': derived.doubled }, children);
}
export default Component20817;
