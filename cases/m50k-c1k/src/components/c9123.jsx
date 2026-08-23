import React from 'react';
const LABEL_9123 = 'component_9123';
export function Component9123({ value = 9123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9123, 'data-value': derived.doubled }, children);
}
export default Component9123;
