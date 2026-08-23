import React from 'react';
const LABEL_21264 = 'component_21264';
export function Component21264({ value = 21264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21264, 'data-value': derived.doubled }, children);
}
export default Component21264;
