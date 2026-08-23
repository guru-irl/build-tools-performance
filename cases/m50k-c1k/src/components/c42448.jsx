import React from 'react';
const LABEL_42448 = 'component_42448';
export function Component42448({ value = 42448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42448, 'data-value': derived.doubled }, children);
}
export default Component42448;
