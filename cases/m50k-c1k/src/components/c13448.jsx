import React from 'react';
const LABEL_13448 = 'component_13448';
export function Component13448({ value = 13448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13448, 'data-value': derived.doubled }, children);
}
export default Component13448;
