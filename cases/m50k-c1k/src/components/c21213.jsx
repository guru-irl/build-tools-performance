import React from 'react';
const LABEL_21213 = 'component_21213';
export function Component21213({ value = 21213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21213, 'data-value': derived.doubled }, children);
}
export default Component21213;
