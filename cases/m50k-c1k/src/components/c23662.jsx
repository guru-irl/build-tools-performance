import React from 'react';
const LABEL_23662 = 'component_23662';
export function Component23662({ value = 23662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23662, 'data-value': derived.doubled }, children);
}
export default Component23662;
