import React from 'react';
const LABEL_21633 = 'component_21633';
export function Component21633({ value = 21633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21633, 'data-value': derived.doubled }, children);
}
export default Component21633;
