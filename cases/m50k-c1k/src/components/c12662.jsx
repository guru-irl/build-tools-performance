import React from 'react';
const LABEL_12662 = 'component_12662';
export function Component12662({ value = 12662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12662, 'data-value': derived.doubled }, children);
}
export default Component12662;
