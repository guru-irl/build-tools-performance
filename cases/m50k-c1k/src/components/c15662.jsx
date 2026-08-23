import React from 'react';
const LABEL_15662 = 'component_15662';
export function Component15662({ value = 15662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15662, 'data-value': derived.doubled }, children);
}
export default Component15662;
