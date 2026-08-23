import React from 'react';
const LABEL_21448 = 'component_21448';
export function Component21448({ value = 21448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21448, 'data-value': derived.doubled }, children);
}
export default Component21448;
