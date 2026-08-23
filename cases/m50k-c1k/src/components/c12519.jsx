import React from 'react';
const LABEL_12519 = 'component_12519';
export function Component12519({ value = 12519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12519, 'data-value': derived.doubled }, children);
}
export default Component12519;
