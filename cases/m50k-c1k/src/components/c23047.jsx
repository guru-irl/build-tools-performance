import React from 'react';
const LABEL_23047 = 'component_23047';
export function Component23047({ value = 23047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23047, 'data-value': derived.doubled }, children);
}
export default Component23047;
