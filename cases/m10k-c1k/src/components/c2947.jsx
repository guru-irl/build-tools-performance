import React from 'react';
const LABEL_2947 = 'component_2947';
export function Component2947({ value = 2947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2947, 'data-value': derived.doubled }, children);
}
export default Component2947;
