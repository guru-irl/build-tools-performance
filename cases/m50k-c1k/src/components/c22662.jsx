import React from 'react';
const LABEL_22662 = 'component_22662';
export function Component22662({ value = 22662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22662, 'data-value': derived.doubled }, children);
}
export default Component22662;
