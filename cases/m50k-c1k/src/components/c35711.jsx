import React from 'react';
const LABEL_35711 = 'component_35711';
export function Component35711({ value = 35711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35711, 'data-value': derived.doubled }, children);
}
export default Component35711;
