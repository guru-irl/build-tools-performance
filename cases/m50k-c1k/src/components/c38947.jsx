import React from 'react';
const LABEL_38947 = 'component_38947';
export function Component38947({ value = 38947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38947, 'data-value': derived.doubled }, children);
}
export default Component38947;
