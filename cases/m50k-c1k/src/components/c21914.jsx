import React from 'react';
const LABEL_21914 = 'component_21914';
export function Component21914({ value = 21914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21914, 'data-value': derived.doubled }, children);
}
export default Component21914;
