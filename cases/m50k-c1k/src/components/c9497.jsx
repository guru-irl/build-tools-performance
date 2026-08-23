import React from 'react';
const LABEL_9497 = 'component_9497';
export function Component9497({ value = 9497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9497, 'data-value': derived.doubled }, children);
}
export default Component9497;
