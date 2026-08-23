import React from 'react';
const LABEL_6578 = 'component_6578';
export function Component6578({ value = 6578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6578, 'data-value': derived.doubled }, children);
}
export default Component6578;
