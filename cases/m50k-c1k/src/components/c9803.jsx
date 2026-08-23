import React from 'react';
const LABEL_9803 = 'component_9803';
export function Component9803({ value = 9803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9803, 'data-value': derived.doubled }, children);
}
export default Component9803;
