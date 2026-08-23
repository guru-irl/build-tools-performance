import React from 'react';
const LABEL_10899 = 'component_10899';
export function Component10899({ value = 10899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10899, 'data-value': derived.doubled }, children);
}
export default Component10899;
