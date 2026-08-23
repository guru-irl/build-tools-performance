import React from 'react';
const LABEL_17484 = 'component_17484';
export function Component17484({ value = 17484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17484, 'data-value': derived.doubled }, children);
}
export default Component17484;
