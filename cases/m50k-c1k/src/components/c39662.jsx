import React from 'react';
const LABEL_39662 = 'component_39662';
export function Component39662({ value = 39662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39662, 'data-value': derived.doubled }, children);
}
export default Component39662;
