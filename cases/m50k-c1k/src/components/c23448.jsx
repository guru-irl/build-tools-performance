import React from 'react';
const LABEL_23448 = 'component_23448';
export function Component23448({ value = 23448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23448, 'data-value': derived.doubled }, children);
}
export default Component23448;
