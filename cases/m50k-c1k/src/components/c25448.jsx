import React from 'react';
const LABEL_25448 = 'component_25448';
export function Component25448({ value = 25448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25448, 'data-value': derived.doubled }, children);
}
export default Component25448;
