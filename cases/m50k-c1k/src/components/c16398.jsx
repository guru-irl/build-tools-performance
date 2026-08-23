import React from 'react';
const LABEL_16398 = 'component_16398';
export function Component16398({ value = 16398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16398, 'data-value': derived.doubled }, children);
}
export default Component16398;
