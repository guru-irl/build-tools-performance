import React from 'react';
const LABEL_21324 = 'component_21324';
export function Component21324({ value = 21324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21324, 'data-value': derived.doubled }, children);
}
export default Component21324;
