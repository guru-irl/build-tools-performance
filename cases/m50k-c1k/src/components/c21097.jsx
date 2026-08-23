import React from 'react';
const LABEL_21097 = 'component_21097';
export function Component21097({ value = 21097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21097, 'data-value': derived.doubled }, children);
}
export default Component21097;
