import React from 'react';
const LABEL_23899 = 'component_23899';
export function Component23899({ value = 23899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23899, 'data-value': derived.doubled }, children);
}
export default Component23899;
