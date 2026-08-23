import React from 'react';
const LABEL_10448 = 'component_10448';
export function Component10448({ value = 10448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10448, 'data-value': derived.doubled }, children);
}
export default Component10448;
