import React from 'react';
const LABEL_21977 = 'component_21977';
export function Component21977({ value = 21977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21977, 'data-value': derived.doubled }, children);
}
export default Component21977;
