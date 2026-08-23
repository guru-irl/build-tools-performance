import React from 'react';
const LABEL_21578 = 'component_21578';
export function Component21578({ value = 21578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21578, 'data-value': derived.doubled }, children);
}
export default Component21578;
