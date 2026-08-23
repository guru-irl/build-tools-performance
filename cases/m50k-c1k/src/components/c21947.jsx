import React from 'react';
const LABEL_21947 = 'component_21947';
export function Component21947({ value = 21947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21947, 'data-value': derived.doubled }, children);
}
export default Component21947;
