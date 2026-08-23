import React from 'react';
const LABEL_38374 = 'component_38374';
export function Component38374({ value = 38374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38374, 'data-value': derived.doubled }, children);
}
export default Component38374;
