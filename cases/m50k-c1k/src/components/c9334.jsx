import React from 'react';
const LABEL_9334 = 'component_9334';
export function Component9334({ value = 9334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9334, 'data-value': derived.doubled }, children);
}
export default Component9334;
