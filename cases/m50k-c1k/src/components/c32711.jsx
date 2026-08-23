import React from 'react';
const LABEL_32711 = 'component_32711';
export function Component32711({ value = 32711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32711, 'data-value': derived.doubled }, children);
}
export default Component32711;
