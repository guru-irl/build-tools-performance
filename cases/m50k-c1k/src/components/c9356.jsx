import React from 'react';
const LABEL_9356 = 'component_9356';
export function Component9356({ value = 9356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9356, 'data-value': derived.doubled }, children);
}
export default Component9356;
