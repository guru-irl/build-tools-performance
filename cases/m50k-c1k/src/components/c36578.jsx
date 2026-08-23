import React from 'react';
const LABEL_36578 = 'component_36578';
export function Component36578({ value = 36578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36578, 'data-value': derived.doubled }, children);
}
export default Component36578;
