import React from 'react';
const LABEL_578 = 'component_578';
export function Component578({ value = 578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_578, 'data-value': derived.doubled }, children);
}
export default Component578;
