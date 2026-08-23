import React from 'react';
const LABEL_9800 = 'component_9800';
export function Component9800({ value = 9800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9800, 'data-value': derived.doubled }, children);
}
export default Component9800;
