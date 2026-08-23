import React from 'react';
const LABEL_9778 = 'component_9778';
export function Component9778({ value = 9778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9778, 'data-value': derived.doubled }, children);
}
export default Component9778;
