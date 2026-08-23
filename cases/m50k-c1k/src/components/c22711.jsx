import React from 'react';
const LABEL_22711 = 'component_22711';
export function Component22711({ value = 22711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22711, 'data-value': derived.doubled }, children);
}
export default Component22711;
