import React from 'react';
const LABEL_38638 = 'component_38638';
export function Component38638({ value = 38638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38638, 'data-value': derived.doubled }, children);
}
export default Component38638;
