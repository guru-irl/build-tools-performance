import React from 'react';
const LABEL_26947 = 'component_26947';
export function Component26947({ value = 26947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26947, 'data-value': derived.doubled }, children);
}
export default Component26947;
