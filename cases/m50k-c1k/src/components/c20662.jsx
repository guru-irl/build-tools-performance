import React from 'react';
const LABEL_20662 = 'component_20662';
export function Component20662({ value = 20662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20662, 'data-value': derived.doubled }, children);
}
export default Component20662;
