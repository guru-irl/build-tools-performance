import React from 'react';
const LABEL_2448 = 'component_2448';
export function Component2448({ value = 2448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2448, 'data-value': derived.doubled }, children);
}
export default Component2448;
