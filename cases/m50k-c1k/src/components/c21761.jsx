import React from 'react';
const LABEL_21761 = 'component_21761';
export function Component21761({ value = 21761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21761, 'data-value': derived.doubled }, children);
}
export default Component21761;
