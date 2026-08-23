import React from 'react';
const LABEL_33448 = 'component_33448';
export function Component33448({ value = 33448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33448, 'data-value': derived.doubled }, children);
}
export default Component33448;
