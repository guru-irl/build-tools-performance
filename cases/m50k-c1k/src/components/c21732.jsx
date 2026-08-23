import React from 'react';
const LABEL_21732 = 'component_21732';
export function Component21732({ value = 21732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21732, 'data-value': derived.doubled }, children);
}
export default Component21732;
