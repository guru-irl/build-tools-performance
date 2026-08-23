import React from 'react';
const LABEL_29662 = 'component_29662';
export function Component29662({ value = 29662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29662, 'data-value': derived.doubled }, children);
}
export default Component29662;
