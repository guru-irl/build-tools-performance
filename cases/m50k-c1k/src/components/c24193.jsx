import React from 'react';
const LABEL_24193 = 'component_24193';
export function Component24193({ value = 24193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24193, 'data-value': derived.doubled }, children);
}
export default Component24193;
