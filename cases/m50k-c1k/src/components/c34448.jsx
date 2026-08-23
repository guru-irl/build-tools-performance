import React from 'react';
const LABEL_34448 = 'component_34448';
export function Component34448({ value = 34448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34448, 'data-value': derived.doubled }, children);
}
export default Component34448;
