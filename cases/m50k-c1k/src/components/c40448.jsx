import React from 'react';
const LABEL_40448 = 'component_40448';
export function Component40448({ value = 40448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40448, 'data-value': derived.doubled }, children);
}
export default Component40448;
