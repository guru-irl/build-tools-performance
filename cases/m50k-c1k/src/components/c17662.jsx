import React from 'react';
const LABEL_17662 = 'component_17662';
export function Component17662({ value = 17662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17662, 'data-value': derived.doubled }, children);
}
export default Component17662;
