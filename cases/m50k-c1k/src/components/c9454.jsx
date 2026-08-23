import React from 'react';
const LABEL_9454 = 'component_9454';
export function Component9454({ value = 9454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9454, 'data-value': derived.doubled }, children);
}
export default Component9454;
