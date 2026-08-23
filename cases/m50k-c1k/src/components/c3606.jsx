import React from 'react';
const LABEL_3606 = 'component_3606';
export function Component3606({ value = 3606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3606, 'data-value': derived.doubled }, children);
}
export default Component3606;
