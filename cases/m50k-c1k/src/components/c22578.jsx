import React from 'react';
const LABEL_22578 = 'component_22578';
export function Component22578({ value = 22578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22578, 'data-value': derived.doubled }, children);
}
export default Component22578;
