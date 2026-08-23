import React from 'react';
const LABEL_7947 = 'component_7947';
export function Component7947({ value = 7947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7947, 'data-value': derived.doubled }, children);
}
export default Component7947;
