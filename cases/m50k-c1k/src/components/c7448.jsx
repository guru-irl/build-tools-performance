import React from 'react';
const LABEL_7448 = 'component_7448';
export function Component7448({ value = 7448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7448, 'data-value': derived.doubled }, children);
}
export default Component7448;
