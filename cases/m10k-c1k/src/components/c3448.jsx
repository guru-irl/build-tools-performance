import React from 'react';
const LABEL_3448 = 'component_3448';
export function Component3448({ value = 3448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3448, 'data-value': derived.doubled }, children);
}
export default Component3448;
