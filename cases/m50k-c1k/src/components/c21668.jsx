import React from 'react';
const LABEL_21668 = 'component_21668';
export function Component21668({ value = 21668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21668, 'data-value': derived.doubled }, children);
}
export default Component21668;
