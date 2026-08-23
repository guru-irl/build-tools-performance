import React from 'react';
const LABEL_17398 = 'component_17398';
export function Component17398({ value = 17398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17398, 'data-value': derived.doubled }, children);
}
export default Component17398;
