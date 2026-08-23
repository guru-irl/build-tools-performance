import React from 'react';
const LABEL_9268 = 'component_9268';
export function Component9268({ value = 9268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9268, 'data-value': derived.doubled }, children);
}
export default Component9268;
