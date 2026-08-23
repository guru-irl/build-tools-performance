import React from 'react';
const LABEL_33314 = 'component_33314';
export function Component33314({ value = 33314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33314, 'data-value': derived.doubled }, children);
}
export default Component33314;
