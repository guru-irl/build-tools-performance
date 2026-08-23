import React from 'react';
const LABEL_9491 = 'component_9491';
export function Component9491({ value = 9491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9491, 'data-value': derived.doubled }, children);
}
export default Component9491;
