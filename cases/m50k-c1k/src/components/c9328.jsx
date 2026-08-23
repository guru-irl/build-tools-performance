import React from 'react';
const LABEL_9328 = 'component_9328';
export function Component9328({ value = 9328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9328, 'data-value': derived.doubled }, children);
}
export default Component9328;
