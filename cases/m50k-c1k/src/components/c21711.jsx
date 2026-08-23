import React from 'react';
const LABEL_21711 = 'component_21711';
export function Component21711({ value = 21711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21711, 'data-value': derived.doubled }, children);
}
export default Component21711;
