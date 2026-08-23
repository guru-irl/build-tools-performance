import React from 'react';
const LABEL_3692 = 'component_3692';
export function Component3692({ value = 3692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3692, 'data-value': derived.doubled }, children);
}
export default Component3692;
