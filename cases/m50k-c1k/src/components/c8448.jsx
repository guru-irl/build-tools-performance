import React from 'react';
const LABEL_8448 = 'component_8448';
export function Component8448({ value = 8448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8448, 'data-value': derived.doubled }, children);
}
export default Component8448;
