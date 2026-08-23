import React from 'react';
const LABEL_12578 = 'component_12578';
export function Component12578({ value = 12578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12578, 'data-value': derived.doubled }, children);
}
export default Component12578;
