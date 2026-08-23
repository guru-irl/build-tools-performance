import React from 'react';
const LABEL_9489 = 'component_9489';
export function Component9489({ value = 9489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9489, 'data-value': derived.doubled }, children);
}
export default Component9489;
