import React from 'react';
const LABEL_29833 = 'component_29833';
export function Component29833({ value = 29833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29833, 'data-value': derived.doubled }, children);
}
export default Component29833;
