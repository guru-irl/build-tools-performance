import React from 'react';
const LABEL_9654 = 'component_9654';
export function Component9654({ value = 9654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9654, 'data-value': derived.doubled }, children);
}
export default Component9654;
