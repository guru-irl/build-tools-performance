import React from 'react';
const LABEL_32676 = 'component_32676';
export function Component32676({ value = 32676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32676, 'data-value': derived.doubled }, children);
}
export default Component32676;
