import React from 'react';
const LABEL_4448 = 'component_4448';
export function Component4448({ value = 4448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4448, 'data-value': derived.doubled }, children);
}
export default Component4448;
