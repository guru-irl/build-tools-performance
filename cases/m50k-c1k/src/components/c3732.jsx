import React from 'react';
const LABEL_3732 = 'component_3732';
export function Component3732({ value = 3732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3732, 'data-value': derived.doubled }, children);
}
export default Component3732;
