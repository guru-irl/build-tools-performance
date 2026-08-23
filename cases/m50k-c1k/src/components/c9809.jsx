import React from 'react';
const LABEL_9809 = 'component_9809';
export function Component9809({ value = 9809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9809, 'data-value': derived.doubled }, children);
}
export default Component9809;
