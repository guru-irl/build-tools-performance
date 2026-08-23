import React from 'react';
const LABEL_21513 = 'component_21513';
export function Component21513({ value = 21513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21513, 'data-value': derived.doubled }, children);
}
export default Component21513;
