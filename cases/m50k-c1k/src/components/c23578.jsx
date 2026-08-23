import React from 'react';
const LABEL_23578 = 'component_23578';
export function Component23578({ value = 23578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23578, 'data-value': derived.doubled }, children);
}
export default Component23578;
