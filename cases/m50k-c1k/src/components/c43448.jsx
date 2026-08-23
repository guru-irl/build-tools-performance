import React from 'react';
const LABEL_43448 = 'component_43448';
export function Component43448({ value = 43448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43448, 'data-value': derived.doubled }, children);
}
export default Component43448;
