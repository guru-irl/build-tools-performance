import React from 'react';
const LABEL_33491 = 'component_33491';
export function Component33491({ value = 33491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33491, 'data-value': derived.doubled }, children);
}
export default Component33491;
