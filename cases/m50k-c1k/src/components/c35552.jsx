import React from 'react';
const LABEL_35552 = 'component_35552';
export function Component35552({ value = 35552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35552, 'data-value': derived.doubled }, children);
}
export default Component35552;
