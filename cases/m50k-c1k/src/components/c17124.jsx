import React from 'react';
const LABEL_17124 = 'component_17124';
export function Component17124({ value = 17124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17124, 'data-value': derived.doubled }, children);
}
export default Component17124;
