import React from 'react';
const LABEL_16448 = 'component_16448';
export function Component16448({ value = 16448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16448, 'data-value': derived.doubled }, children);
}
export default Component16448;
