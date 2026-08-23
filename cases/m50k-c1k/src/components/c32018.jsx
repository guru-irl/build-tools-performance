import React from 'react';
const LABEL_32018 = 'component_32018';
export function Component32018({ value = 32018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32018, 'data-value': derived.doubled }, children);
}
export default Component32018;
