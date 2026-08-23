import React from 'react';
const LABEL_8047 = 'component_8047';
export function Component8047({ value = 8047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8047, 'data-value': derived.doubled }, children);
}
export default Component8047;
