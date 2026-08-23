import React from 'react';
const LABEL_7578 = 'component_7578';
export function Component7578({ value = 7578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7578, 'data-value': derived.doubled }, children);
}
export default Component7578;
