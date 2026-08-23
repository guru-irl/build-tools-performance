import React from 'react';
const LABEL_9481 = 'component_9481';
export function Component9481({ value = 9481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9481, 'data-value': derived.doubled }, children);
}
export default Component9481;
