import React from 'react';
const LABEL_26662 = 'component_26662';
export function Component26662({ value = 26662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26662, 'data-value': derived.doubled }, children);
}
export default Component26662;
