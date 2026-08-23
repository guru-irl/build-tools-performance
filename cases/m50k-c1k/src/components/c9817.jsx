import React from 'react';
const LABEL_9817 = 'component_9817';
export function Component9817({ value = 9817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9817, 'data-value': derived.doubled }, children);
}
export default Component9817;
