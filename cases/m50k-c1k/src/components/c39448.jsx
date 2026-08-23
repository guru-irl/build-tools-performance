import React from 'react';
const LABEL_39448 = 'component_39448';
export function Component39448({ value = 39448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39448, 'data-value': derived.doubled }, children);
}
export default Component39448;
