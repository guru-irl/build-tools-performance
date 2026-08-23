import React from 'react';
const LABEL_34662 = 'component_34662';
export function Component34662({ value = 34662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34662, 'data-value': derived.doubled }, children);
}
export default Component34662;
