import React from 'react';
const LABEL_14662 = 'component_14662';
export function Component14662({ value = 14662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14662, 'data-value': derived.doubled }, children);
}
export default Component14662;
