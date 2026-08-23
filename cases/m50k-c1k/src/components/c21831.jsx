import React from 'react';
const LABEL_21831 = 'component_21831';
export function Component21831({ value = 21831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21831, 'data-value': derived.doubled }, children);
}
export default Component21831;
