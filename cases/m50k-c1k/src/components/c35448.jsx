import React from 'react';
const LABEL_35448 = 'component_35448';
export function Component35448({ value = 35448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35448, 'data-value': derived.doubled }, children);
}
export default Component35448;
