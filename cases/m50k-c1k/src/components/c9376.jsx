import React from 'react';
const LABEL_9376 = 'component_9376';
export function Component9376({ value = 9376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9376, 'data-value': derived.doubled }, children);
}
export default Component9376;
