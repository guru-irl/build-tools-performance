import React from 'react';
const LABEL_9674 = 'component_9674';
export function Component9674({ value = 9674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9674, 'data-value': derived.doubled }, children);
}
export default Component9674;
