import React from 'react';
const LABEL_21372 = 'component_21372';
export function Component21372({ value = 21372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21372, 'data-value': derived.doubled }, children);
}
export default Component21372;
