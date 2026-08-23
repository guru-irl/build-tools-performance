import React from 'react';
const LABEL_9437 = 'component_9437';
export function Component9437({ value = 9437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9437, 'data-value': derived.doubled }, children);
}
export default Component9437;
