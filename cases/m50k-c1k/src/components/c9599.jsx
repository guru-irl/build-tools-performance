import React from 'react';
const LABEL_9599 = 'component_9599';
export function Component9599({ value = 9599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9599, 'data-value': derived.doubled }, children);
}
export default Component9599;
