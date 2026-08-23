import React from 'react';
const LABEL_40947 = 'component_40947';
export function Component40947({ value = 40947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40947, 'data-value': derived.doubled }, children);
}
export default Component40947;
