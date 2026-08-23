import React from 'react';
const LABEL_7662 = 'component_7662';
export function Component7662({ value = 7662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7662, 'data-value': derived.doubled }, children);
}
export default Component7662;
