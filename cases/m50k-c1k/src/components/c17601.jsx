import React from 'react';
const LABEL_17601 = 'component_17601';
export function Component17601({ value = 17601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17601, 'data-value': derived.doubled }, children);
}
export default Component17601;
