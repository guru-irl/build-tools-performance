import React from 'react';
const LABEL_11448 = 'component_11448';
export function Component11448({ value = 11448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11448, 'data-value': derived.doubled }, children);
}
export default Component11448;
