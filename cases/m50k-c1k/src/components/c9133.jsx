import React from 'react';
const LABEL_9133 = 'component_9133';
export function Component9133({ value = 9133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9133, 'data-value': derived.doubled }, children);
}
export default Component9133;
