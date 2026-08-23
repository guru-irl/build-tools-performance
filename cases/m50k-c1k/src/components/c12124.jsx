import React from 'react';
const LABEL_12124 = 'component_12124';
export function Component12124({ value = 12124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12124, 'data-value': derived.doubled }, children);
}
export default Component12124;
