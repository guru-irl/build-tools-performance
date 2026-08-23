import React from 'react';
const LABEL_30448 = 'component_30448';
export function Component30448({ value = 30448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30448, 'data-value': derived.doubled }, children);
}
export default Component30448;
