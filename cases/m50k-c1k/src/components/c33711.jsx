import React from 'react';
const LABEL_33711 = 'component_33711';
export function Component33711({ value = 33711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33711, 'data-value': derived.doubled }, children);
}
export default Component33711;
