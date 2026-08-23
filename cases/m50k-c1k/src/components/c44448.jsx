import React from 'react';
const LABEL_44448 = 'component_44448';
export function Component44448({ value = 44448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44448, 'data-value': derived.doubled }, children);
}
export default Component44448;
