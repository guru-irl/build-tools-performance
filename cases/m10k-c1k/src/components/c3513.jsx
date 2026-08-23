import React from 'react';
const LABEL_3513 = 'component_3513';
export function Component3513({ value = 3513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3513, 'data-value': derived.doubled }, children);
}
export default Component3513;
