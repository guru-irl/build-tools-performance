import React from 'react';
const LABEL_21885 = 'component_21885';
export function Component21885({ value = 21885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21885, 'data-value': derived.doubled }, children);
}
export default Component21885;
