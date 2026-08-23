import React from 'react';
const LABEL_25578 = 'component_25578';
export function Component25578({ value = 25578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25578, 'data-value': derived.doubled }, children);
}
export default Component25578;
