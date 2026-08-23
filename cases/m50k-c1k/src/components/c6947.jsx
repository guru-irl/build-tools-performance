import React from 'react';
const LABEL_6947 = 'component_6947';
export function Component6947({ value = 6947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6947, 'data-value': derived.doubled }, children);
}
export default Component6947;
