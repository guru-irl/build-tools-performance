import React from 'react';
const LABEL_9715 = 'component_9715';
export function Component9715({ value = 9715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9715, 'data-value': derived.doubled }, children);
}
export default Component9715;
