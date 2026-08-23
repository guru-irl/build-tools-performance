import React from 'react';
const LABEL_36448 = 'component_36448';
export function Component36448({ value = 36448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36448, 'data-value': derived.doubled }, children);
}
export default Component36448;
