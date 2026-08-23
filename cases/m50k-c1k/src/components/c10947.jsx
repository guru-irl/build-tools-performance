import React from 'react';
const LABEL_10947 = 'component_10947';
export function Component10947({ value = 10947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10947, 'data-value': derived.doubled }, children);
}
export default Component10947;
