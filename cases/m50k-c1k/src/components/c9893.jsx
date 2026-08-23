import React from 'react';
const LABEL_9893 = 'component_9893';
export function Component9893({ value = 9893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9893, 'data-value': derived.doubled }, children);
}
export default Component9893;
