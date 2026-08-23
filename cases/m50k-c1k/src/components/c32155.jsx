import React from 'react';
const LABEL_32155 = 'component_32155';
export function Component32155({ value = 32155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32155, 'data-value': derived.doubled }, children);
}
export default Component32155;
