import React from 'react';
const LABEL_9678 = 'component_9678';
export function Component9678({ value = 9678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9678, 'data-value': derived.doubled }, children);
}
export default Component9678;
