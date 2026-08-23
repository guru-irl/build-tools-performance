import React from 'react';
const LABEL_13273 = 'component_13273';
export function Component13273({ value = 13273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13273, 'data-value': derived.doubled }, children);
}
export default Component13273;
