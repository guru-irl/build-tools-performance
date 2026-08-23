import React from 'react';
const LABEL_18448 = 'component_18448';
export function Component18448({ value = 18448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18448, 'data-value': derived.doubled }, children);
}
export default Component18448;
