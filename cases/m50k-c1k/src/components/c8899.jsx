import React from 'react';
const LABEL_8899 = 'component_8899';
export function Component8899({ value = 8899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8899, 'data-value': derived.doubled }, children);
}
export default Component8899;
