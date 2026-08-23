import React from 'react';
const LABEL_21202 = 'component_21202';
export function Component21202({ value = 21202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21202, 'data-value': derived.doubled }, children);
}
export default Component21202;
