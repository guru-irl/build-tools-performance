import React from 'react';
const LABEL_23947 = 'component_23947';
export function Component23947({ value = 23947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23947, 'data-value': derived.doubled }, children);
}
export default Component23947;
