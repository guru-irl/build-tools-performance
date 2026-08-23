import React from 'react';
const LABEL_11662 = 'component_11662';
export function Component11662({ value = 11662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11662, 'data-value': derived.doubled }, children);
}
export default Component11662;
