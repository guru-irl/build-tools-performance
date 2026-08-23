import React from 'react';
const LABEL_17079 = 'component_17079';
export function Component17079({ value = 17079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17079, 'data-value': derived.doubled }, children);
}
export default Component17079;
