import React from 'react';
const LABEL_16662 = 'component_16662';
export function Component16662({ value = 16662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16662, 'data-value': derived.doubled }, children);
}
export default Component16662;
