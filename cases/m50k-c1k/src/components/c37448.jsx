import React from 'react';
const LABEL_37448 = 'component_37448';
export function Component37448({ value = 37448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37448, 'data-value': derived.doubled }, children);
}
export default Component37448;
