import React from 'react';
const LABEL_32885 = 'component_32885';
export function Component32885({ value = 32885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32885, 'data-value': derived.doubled }, children);
}
export default Component32885;
