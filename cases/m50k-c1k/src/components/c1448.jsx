import React from 'react';
const LABEL_1448 = 'component_1448';
export function Component1448({ value = 1448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1448, 'data-value': derived.doubled }, children);
}
export default Component1448;
