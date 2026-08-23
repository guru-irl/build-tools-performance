import React from 'react';
const LABEL_17471 = 'component_17471';
export function Component17471({ value = 17471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17471, 'data-value': derived.doubled }, children);
}
export default Component17471;
