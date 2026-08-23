import React from 'react';
const LABEL_45899 = 'component_45899';
export function Component45899({ value = 45899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45899, 'data-value': derived.doubled }, children);
}
export default Component45899;
