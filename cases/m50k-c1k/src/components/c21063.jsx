import React from 'react';
const LABEL_21063 = 'component_21063';
export function Component21063({ value = 21063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21063, 'data-value': derived.doubled }, children);
}
export default Component21063;
