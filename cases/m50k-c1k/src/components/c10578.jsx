import React from 'react';
const LABEL_10578 = 'component_10578';
export function Component10578({ value = 10578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10578, 'data-value': derived.doubled }, children);
}
export default Component10578;
