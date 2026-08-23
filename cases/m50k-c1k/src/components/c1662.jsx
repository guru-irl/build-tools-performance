import React from 'react';
const LABEL_1662 = 'component_1662';
export function Component1662({ value = 1662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1662, 'data-value': derived.doubled }, children);
}
export default Component1662;
