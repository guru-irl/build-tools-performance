import React from 'react';
const LABEL_33750 = 'component_33750';
export function Component33750({ value = 33750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33750, 'data-value': derived.doubled }, children);
}
export default Component33750;
