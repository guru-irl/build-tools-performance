import React from 'react';
const LABEL_8578 = 'component_8578';
export function Component8578({ value = 8578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8578, 'data-value': derived.doubled }, children);
}
export default Component8578;
