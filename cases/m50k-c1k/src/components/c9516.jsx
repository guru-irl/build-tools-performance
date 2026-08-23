import React from 'react';
const LABEL_9516 = 'component_9516';
export function Component9516({ value = 9516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9516, 'data-value': derived.doubled }, children);
}
export default Component9516;
