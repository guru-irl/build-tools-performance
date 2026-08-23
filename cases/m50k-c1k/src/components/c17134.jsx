import React from 'react';
const LABEL_17134 = 'component_17134';
export function Component17134({ value = 17134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17134, 'data-value': derived.doubled }, children);
}
export default Component17134;
