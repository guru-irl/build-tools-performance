import React from 'react';
const LABEL_5578 = 'component_5578';
export function Component5578({ value = 5578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5578, 'data-value': derived.doubled }, children);
}
export default Component5578;
