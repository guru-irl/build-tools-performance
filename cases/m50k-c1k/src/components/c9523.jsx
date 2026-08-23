import React from 'react';
const LABEL_9523 = 'component_9523';
export function Component9523({ value = 9523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9523, 'data-value': derived.doubled }, children);
}
export default Component9523;
