import React from 'react';
const LABEL_33789 = 'component_33789';
export function Component33789({ value = 33789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33789, 'data-value': derived.doubled }, children);
}
export default Component33789;
