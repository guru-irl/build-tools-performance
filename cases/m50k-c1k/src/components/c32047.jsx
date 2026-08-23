import React from 'react';
const LABEL_32047 = 'component_32047';
export function Component32047({ value = 32047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32047, 'data-value': derived.doubled }, children);
}
export default Component32047;
