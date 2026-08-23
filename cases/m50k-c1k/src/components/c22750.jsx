import React from 'react';
const LABEL_22750 = 'component_22750';
export function Component22750({ value = 22750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22750, 'data-value': derived.doubled }, children);
}
export default Component22750;
