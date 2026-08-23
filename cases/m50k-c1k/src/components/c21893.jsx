import React from 'react';
const LABEL_21893 = 'component_21893';
export function Component21893({ value = 21893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21893, 'data-value': derived.doubled }, children);
}
export default Component21893;
