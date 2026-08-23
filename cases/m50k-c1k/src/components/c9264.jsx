import React from 'react';
const LABEL_9264 = 'component_9264';
export function Component9264({ value = 9264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9264, 'data-value': derived.doubled }, children);
}
export default Component9264;
