import React from 'react';
const LABEL_9503 = 'component_9503';
export function Component9503({ value = 9503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9503, 'data-value': derived.doubled }, children);
}
export default Component9503;
