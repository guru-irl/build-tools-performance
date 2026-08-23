import React from 'react';
const LABEL_12633 = 'component_12633';
export function Component12633({ value = 12633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12633, 'data-value': derived.doubled }, children);
}
export default Component12633;
