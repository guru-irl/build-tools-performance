import React from 'react';
const LABEL_21899 = 'component_21899';
export function Component21899({ value = 21899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21899, 'data-value': derived.doubled }, children);
}
export default Component21899;
