import React from 'react';
const LABEL_32509 = 'component_32509';
export function Component32509({ value = 32509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32509, 'data-value': derived.doubled }, children);
}
export default Component32509;
