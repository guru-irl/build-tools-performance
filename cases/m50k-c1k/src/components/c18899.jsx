import React from 'react';
const LABEL_18899 = 'component_18899';
export function Component18899({ value = 18899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18899, 'data-value': derived.doubled }, children);
}
export default Component18899;
