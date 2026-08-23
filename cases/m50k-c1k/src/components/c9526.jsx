import React from 'react';
const LABEL_9526 = 'component_9526';
export function Component9526({ value = 9526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9526, 'data-value': derived.doubled }, children);
}
export default Component9526;
