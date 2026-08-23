import React from 'react';
const LABEL_17197 = 'component_17197';
export function Component17197({ value = 17197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17197, 'data-value': derived.doubled }, children);
}
export default Component17197;
