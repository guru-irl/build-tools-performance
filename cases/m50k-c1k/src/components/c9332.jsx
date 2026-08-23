import React from 'react';
const LABEL_9332 = 'component_9332';
export function Component9332({ value = 9332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9332, 'data-value': derived.doubled }, children);
}
export default Component9332;
