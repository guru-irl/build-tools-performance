import React from 'react';
const LABEL_25662 = 'component_25662';
export function Component25662({ value = 25662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25662, 'data-value': derived.doubled }, children);
}
export default Component25662;
