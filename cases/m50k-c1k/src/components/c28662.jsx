import React from 'react';
const LABEL_28662 = 'component_28662';
export function Component28662({ value = 28662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28662, 'data-value': derived.doubled }, children);
}
export default Component28662;
