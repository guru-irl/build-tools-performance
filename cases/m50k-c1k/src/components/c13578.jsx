import React from 'react';
const LABEL_13578 = 'component_13578';
export function Component13578({ value = 13578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13578, 'data-value': derived.doubled }, children);
}
export default Component13578;
