import React from 'react';
const LABEL_39578 = 'component_39578';
export function Component39578({ value = 39578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39578, 'data-value': derived.doubled }, children);
}
export default Component39578;
