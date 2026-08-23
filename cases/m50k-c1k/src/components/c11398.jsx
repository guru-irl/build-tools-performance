import React from 'react';
const LABEL_11398 = 'component_11398';
export function Component11398({ value = 11398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11398, 'data-value': derived.doubled }, children);
}
export default Component11398;
