import React from 'react';
const LABEL_32801 = 'component_32801';
export function Component32801({ value = 32801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32801, 'data-value': derived.doubled }, children);
}
export default Component32801;
