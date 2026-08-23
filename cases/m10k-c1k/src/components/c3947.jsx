import React from 'react';
const LABEL_3947 = 'component_3947';
export function Component3947({ value = 3947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3947, 'data-value': derived.doubled }, children);
}
export default Component3947;
