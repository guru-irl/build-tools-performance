import React from 'react';
const LABEL_32947 = 'component_32947';
export function Component32947({ value = 32947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32947, 'data-value': derived.doubled }, children);
}
export default Component32947;
