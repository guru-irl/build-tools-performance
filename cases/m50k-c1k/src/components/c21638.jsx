import React from 'react';
const LABEL_21638 = 'component_21638';
export function Component21638({ value = 21638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21638, 'data-value': derived.doubled }, children);
}
export default Component21638;
