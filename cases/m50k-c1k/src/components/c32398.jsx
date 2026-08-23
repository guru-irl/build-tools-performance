import React from 'react';
const LABEL_32398 = 'component_32398';
export function Component32398({ value = 32398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32398, 'data-value': derived.doubled }, children);
}
export default Component32398;
