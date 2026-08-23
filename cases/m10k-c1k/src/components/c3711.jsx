import React from 'react';
const LABEL_3711 = 'component_3711';
export function Component3711({ value = 3711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3711, 'data-value': derived.doubled }, children);
}
export default Component3711;
