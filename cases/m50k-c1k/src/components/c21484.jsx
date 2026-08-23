import React from 'react';
const LABEL_21484 = 'component_21484';
export function Component21484({ value = 21484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21484, 'data-value': derived.doubled }, children);
}
export default Component21484;
