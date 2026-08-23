import React from 'react';
const LABEL_21787 = 'component_21787';
export function Component21787({ value = 21787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21787, 'data-value': derived.doubled }, children);
}
export default Component21787;
