import React from 'react';
const LABEL_15341 = 'component_15341';
export function Component15341({ value = 15341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15341, 'data-value': derived.doubled }, children);
}
export default Component15341;
