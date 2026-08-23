import React from 'react';
const LABEL_21827 = 'component_21827';
export function Component21827({ value = 21827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21827, 'data-value': derived.doubled }, children);
}
export default Component21827;
