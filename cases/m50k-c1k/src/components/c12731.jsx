import React from 'react';
const LABEL_12731 = 'component_12731';
export function Component12731({ value = 12731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12731, 'data-value': derived.doubled }, children);
}
export default Component12731;
