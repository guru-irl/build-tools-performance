import React from 'react';
const LABEL_29711 = 'component_29711';
export function Component29711({ value = 29711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29711, 'data-value': derived.doubled }, children);
}
export default Component29711;
