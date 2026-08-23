import React from 'react';
const LABEL_8662 = 'component_8662';
export function Component8662({ value = 8662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8662, 'data-value': derived.doubled }, children);
}
export default Component8662;
