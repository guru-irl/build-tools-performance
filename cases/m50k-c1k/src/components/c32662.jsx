import React from 'react';
const LABEL_32662 = 'component_32662';
export function Component32662({ value = 32662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32662, 'data-value': derived.doubled }, children);
}
export default Component32662;
