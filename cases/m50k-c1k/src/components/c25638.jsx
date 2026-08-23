import React from 'react';
const LABEL_25638 = 'component_25638';
export function Component25638({ value = 25638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25638, 'data-value': derived.doubled }, children);
}
export default Component25638;
