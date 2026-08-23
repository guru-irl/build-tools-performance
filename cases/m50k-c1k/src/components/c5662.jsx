import React from 'react';
const LABEL_5662 = 'component_5662';
export function Component5662({ value = 5662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5662, 'data-value': derived.doubled }, children);
}
export default Component5662;
