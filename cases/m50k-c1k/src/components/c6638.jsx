import React from 'react';
const LABEL_6638 = 'component_6638';
export function Component6638({ value = 6638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6638, 'data-value': derived.doubled }, children);
}
export default Component6638;
