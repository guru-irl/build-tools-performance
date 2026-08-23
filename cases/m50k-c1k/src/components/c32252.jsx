import React from 'react';
const LABEL_32252 = 'component_32252';
export function Component32252({ value = 32252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32252, 'data-value': derived.doubled }, children);
}
export default Component32252;
