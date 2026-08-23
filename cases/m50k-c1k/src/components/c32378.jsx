import React from 'react';
const LABEL_32378 = 'component_32378';
export function Component32378({ value = 32378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32378, 'data-value': derived.doubled }, children);
}
export default Component32378;
