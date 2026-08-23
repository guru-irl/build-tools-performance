import React from 'react';
const LABEL_33256 = 'component_33256';
export function Component33256({ value = 33256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33256, 'data-value': derived.doubled }, children);
}
export default Component33256;
