import React from 'react';
const LABEL_32789 = 'component_32789';
export function Component32789({ value = 32789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32789, 'data-value': derived.doubled }, children);
}
export default Component32789;
