import React from 'react';
const LABEL_33662 = 'component_33662';
export function Component33662({ value = 33662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33662, 'data-value': derived.doubled }, children);
}
export default Component33662;
