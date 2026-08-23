import React from 'react';
const LABEL_33578 = 'component_33578';
export function Component33578({ value = 33578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33578, 'data-value': derived.doubled }, children);
}
export default Component33578;
