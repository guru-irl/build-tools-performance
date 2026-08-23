import React from 'react';
const LABEL_12448 = 'component_12448';
export function Component12448({ value = 12448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12448, 'data-value': derived.doubled }, children);
}
export default Component12448;
