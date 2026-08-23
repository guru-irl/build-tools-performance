import React from 'react';
const LABEL_12787 = 'component_12787';
export function Component12787({ value = 12787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12787, 'data-value': derived.doubled }, children);
}
export default Component12787;
