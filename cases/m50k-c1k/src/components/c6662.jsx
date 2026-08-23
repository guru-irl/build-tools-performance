import React from 'react';
const LABEL_6662 = 'component_6662';
export function Component6662({ value = 6662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6662, 'data-value': derived.doubled }, children);
}
export default Component6662;
