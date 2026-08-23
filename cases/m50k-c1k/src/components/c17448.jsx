import React from 'react';
const LABEL_17448 = 'component_17448';
export function Component17448({ value = 17448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17448, 'data-value': derived.doubled }, children);
}
export default Component17448;
