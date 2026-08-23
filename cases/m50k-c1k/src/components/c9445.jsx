import React from 'react';
const LABEL_9445 = 'component_9445';
export function Component9445({ value = 9445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9445, 'data-value': derived.doubled }, children);
}
export default Component9445;
