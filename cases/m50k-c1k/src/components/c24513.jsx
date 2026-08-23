import React from 'react';
const LABEL_24513 = 'component_24513';
export function Component24513({ value = 24513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24513, 'data-value': derived.doubled }, children);
}
export default Component24513;
