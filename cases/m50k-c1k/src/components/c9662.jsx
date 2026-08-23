import React from 'react';
const LABEL_9662 = 'component_9662';
export function Component9662({ value = 9662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9662, 'data-value': derived.doubled }, children);
}
export default Component9662;
