import React from 'react';
const LABEL_18662 = 'component_18662';
export function Component18662({ value = 18662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18662, 'data-value': derived.doubled }, children);
}
export default Component18662;
