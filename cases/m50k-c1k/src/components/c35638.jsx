import React from 'react';
const LABEL_35638 = 'component_35638';
export function Component35638({ value = 35638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35638, 'data-value': derived.doubled }, children);
}
export default Component35638;
