import React from 'react';
const LABEL_22398 = 'component_22398';
export function Component22398({ value = 22398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22398, 'data-value': derived.doubled }, children);
}
export default Component22398;
