import React from 'react';
const LABEL_23436 = 'component_23436';
export function Component23436({ value = 23436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23436, 'data-value': derived.doubled }, children);
}
export default Component23436;
