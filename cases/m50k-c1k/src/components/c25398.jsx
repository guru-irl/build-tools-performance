import React from 'react';
const LABEL_25398 = 'component_25398';
export function Component25398({ value = 25398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25398, 'data-value': derived.doubled }, children);
}
export default Component25398;
