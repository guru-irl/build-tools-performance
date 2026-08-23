import React from 'react';
const LABEL_33123 = 'component_33123';
export function Component33123({ value = 33123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33123, 'data-value': derived.doubled }, children);
}
export default Component33123;
