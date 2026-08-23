import React from 'react';
const LABEL_9351 = 'component_9351';
export function Component9351({ value = 9351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9351, 'data-value': derived.doubled }, children);
}
export default Component9351;
