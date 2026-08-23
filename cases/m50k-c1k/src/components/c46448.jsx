import React from 'react';
const LABEL_46448 = 'component_46448';
export function Component46448({ value = 46448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46448, 'data-value': derived.doubled }, children);
}
export default Component46448;
