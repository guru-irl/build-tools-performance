import React from 'react';
const LABEL_9222 = 'component_9222';
export function Component9222({ value = 9222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9222, 'data-value': derived.doubled }, children);
}
export default Component9222;
