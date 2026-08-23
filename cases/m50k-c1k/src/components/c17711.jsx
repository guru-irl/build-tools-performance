import React from 'react';
const LABEL_17711 = 'component_17711';
export function Component17711({ value = 17711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17711, 'data-value': derived.doubled }, children);
}
export default Component17711;
