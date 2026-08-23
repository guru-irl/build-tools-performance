import React from 'react';
const LABEL_17578 = 'component_17578';
export function Component17578({ value = 17578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17578, 'data-value': derived.doubled }, children);
}
export default Component17578;
