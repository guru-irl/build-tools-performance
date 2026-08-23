import React from 'react';
const LABEL_448 = 'component_448';
export function Component448({ value = 448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_448, 'data-value': derived.doubled }, children);
}
export default Component448;
