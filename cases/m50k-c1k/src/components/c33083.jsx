import React from 'react';
const LABEL_33083 = 'component_33083';
export function Component33083({ value = 33083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33083, 'data-value': derived.doubled }, children);
}
export default Component33083;
