import React from 'react';
const LABEL_40899 = 'component_40899';
export function Component40899({ value = 40899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40899, 'data-value': derived.doubled }, children);
}
export default Component40899;
