import React from 'react';
const LABEL_19448 = 'component_19448';
export function Component19448({ value = 19448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19448, 'data-value': derived.doubled }, children);
}
export default Component19448;
