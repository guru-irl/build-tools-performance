import React from 'react';
const LABEL_9878 = 'component_9878';
export function Component9878({ value = 9878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9878, 'data-value': derived.doubled }, children);
}
export default Component9878;
