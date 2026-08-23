import React from 'react';
const LABEL_14448 = 'component_14448';
export function Component14448({ value = 14448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14448, 'data-value': derived.doubled }, children);
}
export default Component14448;
