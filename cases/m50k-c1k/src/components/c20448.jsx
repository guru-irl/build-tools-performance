import React from 'react';
const LABEL_20448 = 'component_20448';
export function Component20448({ value = 20448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20448, 'data-value': derived.doubled }, children);
}
export default Component20448;
