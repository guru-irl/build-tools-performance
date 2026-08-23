import React from 'react';
const LABEL_9639 = 'component_9639';
export function Component9639({ value = 9639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9639, 'data-value': derived.doubled }, children);
}
export default Component9639;
