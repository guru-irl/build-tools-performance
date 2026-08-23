import React from 'react';
const LABEL_22448 = 'component_22448';
export function Component22448({ value = 22448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22448, 'data-value': derived.doubled }, children);
}
export default Component22448;
