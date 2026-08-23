import React from 'react';
const LABEL_29448 = 'component_29448';
export function Component29448({ value = 29448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29448, 'data-value': derived.doubled }, children);
}
export default Component29448;
