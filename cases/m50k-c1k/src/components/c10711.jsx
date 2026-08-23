import React from 'react';
const LABEL_10711 = 'component_10711';
export function Component10711({ value = 10711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10711, 'data-value': derived.doubled }, children);
}
export default Component10711;
