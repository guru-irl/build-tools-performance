import React from 'react';
const LABEL_33621 = 'component_33621';
export function Component33621({ value = 33621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33621, 'data-value': derived.doubled }, children);
}
export default Component33621;
