import React from 'react';
const LABEL_35899 = 'component_35899';
export function Component35899({ value = 35899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35899, 'data-value': derived.doubled }, children);
}
export default Component35899;
