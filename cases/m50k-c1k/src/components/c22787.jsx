import React from 'react';
const LABEL_22787 = 'component_22787';
export function Component22787({ value = 22787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22787, 'data-value': derived.doubled }, children);
}
export default Component22787;
