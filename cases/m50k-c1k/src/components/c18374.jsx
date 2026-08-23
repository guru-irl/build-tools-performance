import React from 'react';
const LABEL_18374 = 'component_18374';
export function Component18374({ value = 18374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18374, 'data-value': derived.doubled }, children);
}
export default Component18374;
