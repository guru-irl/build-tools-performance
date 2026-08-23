import React from 'react';
const LABEL_21757 = 'component_21757';
export function Component21757({ value = 21757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21757, 'data-value': derived.doubled }, children);
}
export default Component21757;
