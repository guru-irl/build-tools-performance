import React from 'react';
const LABEL_9333 = 'component_9333';
export function Component9333({ value = 9333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9333, 'data-value': derived.doubled }, children);
}
export default Component9333;
