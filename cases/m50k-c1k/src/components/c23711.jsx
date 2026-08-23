import React from 'react';
const LABEL_23711 = 'component_23711';
export function Component23711({ value = 23711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23711, 'data-value': derived.doubled }, children);
}
export default Component23711;
