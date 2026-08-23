import React from 'react';
const LABEL_21516 = 'component_21516';
export function Component21516({ value = 21516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21516, 'data-value': derived.doubled }, children);
}
export default Component21516;
