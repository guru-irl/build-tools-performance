import React from 'react';
const LABEL_33445 = 'component_33445';
export function Component33445({ value = 33445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33445, 'data-value': derived.doubled }, children);
}
export default Component33445;
