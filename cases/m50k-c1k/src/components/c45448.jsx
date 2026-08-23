import React from 'react';
const LABEL_45448 = 'component_45448';
export function Component45448({ value = 45448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45448, 'data-value': derived.doubled }, children);
}
export default Component45448;
