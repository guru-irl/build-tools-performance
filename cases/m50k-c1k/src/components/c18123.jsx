import React from 'react';
const LABEL_18123 = 'component_18123';
export function Component18123({ value = 18123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18123, 'data-value': derived.doubled }, children);
}
export default Component18123;
