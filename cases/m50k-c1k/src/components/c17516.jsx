import React from 'react';
const LABEL_17516 = 'component_17516';
export function Component17516({ value = 17516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17516, 'data-value': derived.doubled }, children);
}
export default Component17516;
