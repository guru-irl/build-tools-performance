import React from 'react';
const LABEL_15899 = 'component_15899';
export function Component15899({ value = 15899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15899, 'data-value': derived.doubled }, children);
}
export default Component15899;
