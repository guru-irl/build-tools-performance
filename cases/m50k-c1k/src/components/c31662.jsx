import React from 'react';
const LABEL_31662 = 'component_31662';
export function Component31662({ value = 31662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31662, 'data-value': derived.doubled }, children);
}
export default Component31662;
