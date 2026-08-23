import React from 'react';
const LABEL_45484 = 'component_45484';
export function Component45484({ value = 45484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45484, 'data-value': derived.doubled }, children);
}
export default Component45484;
