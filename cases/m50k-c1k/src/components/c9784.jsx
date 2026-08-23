import React from 'react';
const LABEL_9784 = 'component_9784';
export function Component9784({ value = 9784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9784, 'data-value': derived.doubled }, children);
}
export default Component9784;
