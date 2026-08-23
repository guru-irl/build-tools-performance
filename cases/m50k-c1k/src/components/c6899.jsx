import React from 'react';
const LABEL_6899 = 'component_6899';
export function Component6899({ value = 6899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6899, 'data-value': derived.doubled }, children);
}
export default Component6899;
