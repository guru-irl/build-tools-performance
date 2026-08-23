import React from 'react';
const LABEL_9545 = 'component_9545';
export function Component9545({ value = 9545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9545, 'data-value': derived.doubled }, children);
}
export default Component9545;
