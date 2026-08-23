import React from 'react';
const LABEL_662 = 'component_662';
export function Component662({ value = 662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_662, 'data-value': derived.doubled }, children);
}
export default Component662;
