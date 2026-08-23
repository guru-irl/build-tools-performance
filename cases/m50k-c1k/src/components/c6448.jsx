import React from 'react';
const LABEL_6448 = 'component_6448';
export function Component6448({ value = 6448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6448, 'data-value': derived.doubled }, children);
}
export default Component6448;
