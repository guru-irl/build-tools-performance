import React from 'react';
const LABEL_18513 = 'component_18513';
export function Component18513({ value = 18513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18513, 'data-value': derived.doubled }, children);
}
export default Component18513;
