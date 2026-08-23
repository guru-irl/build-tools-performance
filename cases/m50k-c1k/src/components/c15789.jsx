import React from 'react';
const LABEL_15789 = 'component_15789';
export function Component15789({ value = 15789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15789, 'data-value': derived.doubled }, children);
}
export default Component15789;
