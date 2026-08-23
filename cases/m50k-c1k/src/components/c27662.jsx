import React from 'react';
const LABEL_27662 = 'component_27662';
export function Component27662({ value = 27662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27662, 'data-value': derived.doubled }, children);
}
export default Component27662;
