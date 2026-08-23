import React from 'react';
const LABEL_24662 = 'component_24662';
export function Component24662({ value = 24662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24662, 'data-value': derived.doubled }, children);
}
export default Component24662;
