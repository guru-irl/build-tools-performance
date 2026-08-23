import React from 'react';
const LABEL_9792 = 'component_9792';
export function Component9792({ value = 9792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9792, 'data-value': derived.doubled }, children);
}
export default Component9792;
