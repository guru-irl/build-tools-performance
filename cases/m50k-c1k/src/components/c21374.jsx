import React from 'react';
const LABEL_21374 = 'component_21374';
export function Component21374({ value = 21374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21374, 'data-value': derived.doubled }, children);
}
export default Component21374;
