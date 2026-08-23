import React from 'react';
const LABEL_9544 = 'component_9544';
export function Component9544({ value = 9544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9544, 'data-value': derived.doubled }, children);
}
export default Component9544;
