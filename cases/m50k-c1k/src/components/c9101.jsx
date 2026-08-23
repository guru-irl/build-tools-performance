import React from 'react';
const LABEL_9101 = 'component_9101';
export function Component9101({ value = 9101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9101, 'data-value': derived.doubled }, children);
}
export default Component9101;
