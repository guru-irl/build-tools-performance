import React from 'react';
const LABEL_9590 = 'component_9590';
export function Component9590({ value = 9590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9590, 'data-value': derived.doubled }, children);
}
export default Component9590;
