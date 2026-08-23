import React from 'react';
const LABEL_13513 = 'component_13513';
export function Component13513({ value = 13513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13513, 'data-value': derived.doubled }, children);
}
export default Component13513;
