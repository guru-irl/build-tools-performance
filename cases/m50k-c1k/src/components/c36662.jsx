import React from 'react';
const LABEL_36662 = 'component_36662';
export function Component36662({ value = 36662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36662, 'data-value': derived.doubled }, children);
}
export default Component36662;
