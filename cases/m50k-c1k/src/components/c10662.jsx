import React from 'react';
const LABEL_10662 = 'component_10662';
export function Component10662({ value = 10662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10662, 'data-value': derived.doubled }, children);
}
export default Component10662;
