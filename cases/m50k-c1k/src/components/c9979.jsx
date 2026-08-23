import React from 'react';
const LABEL_9979 = 'component_9979';
export function Component9979({ value = 9979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9979, 'data-value': derived.doubled }, children);
}
export default Component9979;
