import React from 'react';
const LABEL_28448 = 'component_28448';
export function Component28448({ value = 28448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28448, 'data-value': derived.doubled }, children);
}
export default Component28448;
