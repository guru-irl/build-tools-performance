import React from 'react';
const LABEL_24448 = 'component_24448';
export function Component24448({ value = 24448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24448, 'data-value': derived.doubled }, children);
}
export default Component24448;
