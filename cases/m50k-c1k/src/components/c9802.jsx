import React from 'react';
const LABEL_9802 = 'component_9802';
export function Component9802({ value = 9802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9802, 'data-value': derived.doubled }, children);
}
export default Component9802;
