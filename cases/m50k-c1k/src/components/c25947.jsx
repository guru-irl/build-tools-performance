import React from 'react';
const LABEL_25947 = 'component_25947';
export function Component25947({ value = 25947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25947, 'data-value': derived.doubled }, children);
}
export default Component25947;
