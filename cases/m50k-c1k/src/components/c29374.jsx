import React from 'react';
const LABEL_29374 = 'component_29374';
export function Component29374({ value = 29374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29374, 'data-value': derived.doubled }, children);
}
export default Component29374;
