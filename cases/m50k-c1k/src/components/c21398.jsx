import React from 'react';
const LABEL_21398 = 'component_21398';
export function Component21398({ value = 21398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21398, 'data-value': derived.doubled }, children);
}
export default Component21398;
