import React from 'react';
const LABEL_33516 = 'component_33516';
export function Component33516({ value = 33516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33516, 'data-value': derived.doubled }, children);
}
export default Component33516;
