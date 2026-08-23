import React from 'react';
const LABEL_38448 = 'component_38448';
export function Component38448({ value = 38448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38448, 'data-value': derived.doubled }, children);
}
export default Component38448;
