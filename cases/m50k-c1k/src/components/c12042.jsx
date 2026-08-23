import React from 'react';
const LABEL_12042 = 'component_12042';
export function Component12042({ value = 12042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12042, 'data-value': derived.doubled }, children);
}
export default Component12042;
