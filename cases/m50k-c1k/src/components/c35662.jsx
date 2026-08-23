import React from 'react';
const LABEL_35662 = 'component_35662';
export function Component35662({ value = 35662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35662, 'data-value': derived.doubled }, children);
}
export default Component35662;
