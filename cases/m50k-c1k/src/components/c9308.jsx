import React from 'react';
const LABEL_9308 = 'component_9308';
export function Component9308({ value = 9308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9308, 'data-value': derived.doubled }, children);
}
export default Component9308;
