import React from 'react';
const LABEL_6398 = 'component_6398';
export function Component6398({ value = 6398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6398, 'data-value': derived.doubled }, children);
}
export default Component6398;
