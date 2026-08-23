import React from 'react';
const LABEL_18833 = 'component_18833';
export function Component18833({ value = 18833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18833, 'data-value': derived.doubled }, children);
}
export default Component18833;
