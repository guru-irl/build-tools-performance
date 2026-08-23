import React from 'react';
const LABEL_34331 = 'component_34331';
export function Component34331({ value = 34331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34331, 'data-value': derived.doubled }, children);
}
export default Component34331;
