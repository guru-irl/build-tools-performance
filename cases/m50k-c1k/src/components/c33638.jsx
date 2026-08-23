import React from 'react';
const LABEL_33638 = 'component_33638';
export function Component33638({ value = 33638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33638, 'data-value': derived.doubled }, children);
}
export default Component33638;
