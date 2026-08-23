import React from 'react';
const LABEL_21172 = 'component_21172';
export function Component21172({ value = 21172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21172, 'data-value': derived.doubled }, children);
}
export default Component21172;
