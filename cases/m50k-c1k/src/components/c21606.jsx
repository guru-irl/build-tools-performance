import React from 'react';
const LABEL_21606 = 'component_21606';
export function Component21606({ value = 21606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21606, 'data-value': derived.doubled }, children);
}
export default Component21606;
