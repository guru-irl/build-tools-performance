import React from 'react';
const LABEL_29710 = 'component_29710';
export function Component29710({ value = 29710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29710, 'data-value': derived.doubled }, children);
}
export default Component29710;
