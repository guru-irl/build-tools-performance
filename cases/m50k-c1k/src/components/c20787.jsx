import React from 'react';
const LABEL_20787 = 'component_20787';
export function Component20787({ value = 20787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20787, 'data-value': derived.doubled }, children);
}
export default Component20787;
