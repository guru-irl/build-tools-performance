import React from 'react';
const LABEL_26448 = 'component_26448';
export function Component26448({ value = 26448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26448, 'data-value': derived.doubled }, children);
}
export default Component26448;
