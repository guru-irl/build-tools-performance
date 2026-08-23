import React from 'react';
const LABEL_1899 = 'component_1899';
export function Component1899({ value = 1899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1899, 'data-value': derived.doubled }, children);
}
export default Component1899;
