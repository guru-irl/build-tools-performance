import React from 'react';
const LABEL_9097 = 'component_9097';
export function Component9097({ value = 9097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9097, 'data-value': derived.doubled }, children);
}
export default Component9097;
