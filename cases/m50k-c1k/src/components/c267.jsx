import React from 'react';
const LABEL_267 = 'component_267';
export function Component267({ value = 267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_267, 'data-value': derived.doubled }, children);
}
export default Component267;
