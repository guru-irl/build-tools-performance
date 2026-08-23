import React from 'react';
const LABEL_21627 = 'component_21627';
export function Component21627({ value = 21627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21627, 'data-value': derived.doubled }, children);
}
export default Component21627;
