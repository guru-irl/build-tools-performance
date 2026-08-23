import React from 'react';
const LABEL_9642 = 'component_9642';
export function Component9642({ value = 9642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9642, 'data-value': derived.doubled }, children);
}
export default Component9642;
