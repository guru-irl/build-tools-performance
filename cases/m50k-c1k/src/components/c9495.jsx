import React from 'react';
const LABEL_9495 = 'component_9495';
export function Component9495({ value = 9495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9495, 'data-value': derived.doubled }, children);
}
export default Component9495;
