import React from 'react';
const LABEL_21047 = 'component_21047';
export function Component21047({ value = 21047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21047, 'data-value': derived.doubled }, children);
}
export default Component21047;
