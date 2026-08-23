import React from 'react';
const LABEL_17519 = 'component_17519';
export function Component17519({ value = 17519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17519, 'data-value': derived.doubled }, children);
}
export default Component17519;
