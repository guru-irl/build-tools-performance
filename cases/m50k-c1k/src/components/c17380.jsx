import React from 'react';
const LABEL_17380 = 'component_17380';
export function Component17380({ value = 17380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17380, 'data-value': derived.doubled }, children);
}
export default Component17380;
