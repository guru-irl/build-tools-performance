import React from 'react';
const LABEL_32448 = 'component_32448';
export function Component32448({ value = 32448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32448, 'data-value': derived.doubled }, children);
}
export default Component32448;
