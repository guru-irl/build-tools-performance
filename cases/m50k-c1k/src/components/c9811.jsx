import React from 'react';
const LABEL_9811 = 'component_9811';
export function Component9811({ value = 9811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9811, 'data-value': derived.doubled }, children);
}
export default Component9811;
