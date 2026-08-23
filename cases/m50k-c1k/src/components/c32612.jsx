import React from 'react';
const LABEL_32612 = 'component_32612';
export function Component32612({ value = 32612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32612, 'data-value': derived.doubled }, children);
}
export default Component32612;
