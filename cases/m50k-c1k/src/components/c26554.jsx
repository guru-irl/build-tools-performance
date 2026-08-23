import React from 'react';
const LABEL_26554 = 'component_26554';
export function Component26554({ value = 26554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26554, 'data-value': derived.doubled }, children);
}
export default Component26554;
