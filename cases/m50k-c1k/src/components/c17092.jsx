import React from 'react';
const LABEL_17092 = 'component_17092';
export function Component17092({ value = 17092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17092, 'data-value': derived.doubled }, children);
}
export default Component17092;
