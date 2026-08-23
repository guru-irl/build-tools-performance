import React from 'react';
const LABEL_33899 = 'component_33899';
export function Component33899({ value = 33899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33899, 'data-value': derived.doubled }, children);
}
export default Component33899;
