import React from 'react';
const LABEL_9629 = 'component_9629';
export function Component9629({ value = 9629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9629, 'data-value': derived.doubled }, children);
}
export default Component9629;
