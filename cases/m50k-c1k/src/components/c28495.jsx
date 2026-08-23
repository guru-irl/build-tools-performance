import React from 'react';
const LABEL_28495 = 'component_28495';
export function Component28495({ value = 28495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28495, 'data-value': derived.doubled }, children);
}
export default Component28495;
