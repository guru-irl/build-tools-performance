import React from 'react';
const LABEL_35445 = 'component_35445';
export function Component35445({ value = 35445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35445, 'data-value': derived.doubled }, children);
}
export default Component35445;
