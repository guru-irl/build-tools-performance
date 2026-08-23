import React from 'react';
const LABEL_10252 = 'component_10252';
export function Component10252({ value = 10252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10252, 'data-value': derived.doubled }, children);
}
export default Component10252;
