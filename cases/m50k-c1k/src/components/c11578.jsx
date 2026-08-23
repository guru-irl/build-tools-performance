import React from 'react';
const LABEL_11578 = 'component_11578';
export function Component11578({ value = 11578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11578, 'data-value': derived.doubled }, children);
}
export default Component11578;
