import React from 'react';
const LABEL_32776 = 'component_32776';
export function Component32776({ value = 32776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32776, 'data-value': derived.doubled }, children);
}
export default Component32776;
