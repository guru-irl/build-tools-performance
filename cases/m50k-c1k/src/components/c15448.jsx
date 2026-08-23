import React from 'react';
const LABEL_15448 = 'component_15448';
export function Component15448({ value = 15448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15448, 'data-value': derived.doubled }, children);
}
export default Component15448;
