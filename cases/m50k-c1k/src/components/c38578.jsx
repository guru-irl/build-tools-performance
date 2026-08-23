import React from 'react';
const LABEL_38578 = 'component_38578';
export function Component38578({ value = 38578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38578, 'data-value': derived.doubled }, children);
}
export default Component38578;
