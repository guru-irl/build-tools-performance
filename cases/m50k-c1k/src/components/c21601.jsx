import React from 'react';
const LABEL_21601 = 'component_21601';
export function Component21601({ value = 21601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21601, 'data-value': derived.doubled }, children);
}
export default Component21601;
