import React from 'react';
const LABEL_9494 = 'component_9494';
export function Component9494({ value = 9494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9494, 'data-value': derived.doubled }, children);
}
export default Component9494;
