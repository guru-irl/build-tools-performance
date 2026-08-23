import React from 'react';
const LABEL_35513 = 'component_35513';
export function Component35513({ value = 35513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35513, 'data-value': derived.doubled }, children);
}
export default Component35513;
