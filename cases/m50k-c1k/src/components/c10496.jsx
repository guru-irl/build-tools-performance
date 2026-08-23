import React from 'react';
const LABEL_10496 = 'component_10496';
export function Component10496({ value = 10496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10496, 'data-value': derived.doubled }, children);
}
export default Component10496;
