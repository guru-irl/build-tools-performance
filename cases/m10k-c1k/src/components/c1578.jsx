import React from 'react';
const LABEL_1578 = 'component_1578';
export function Component1578({ value = 1578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1578, 'data-value': derived.doubled }, children);
}
export default Component1578;
