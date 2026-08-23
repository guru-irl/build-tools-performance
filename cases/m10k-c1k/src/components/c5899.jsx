import React from 'react';
const LABEL_5899 = 'component_5899';
export function Component5899({ value = 5899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5899, 'data-value': derived.doubled }, children);
}
export default Component5899;
