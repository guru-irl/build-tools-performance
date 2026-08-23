import React from 'react';
const LABEL_17256 = 'component_17256';
export function Component17256({ value = 17256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17256, 'data-value': derived.doubled }, children);
}
export default Component17256;
