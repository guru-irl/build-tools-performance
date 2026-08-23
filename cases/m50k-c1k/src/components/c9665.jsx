import React from 'react';
const LABEL_9665 = 'component_9665';
export function Component9665({ value = 9665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9665, 'data-value': derived.doubled }, children);
}
export default Component9665;
