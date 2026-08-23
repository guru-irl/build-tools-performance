import React from 'react';
const LABEL_9448 = 'component_9448';
export function Component9448({ value = 9448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9448, 'data-value': derived.doubled }, children);
}
export default Component9448;
