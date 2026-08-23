import React from 'react';
const LABEL_9479 = 'component_9479';
export function Component9479({ value = 9479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9479, 'data-value': derived.doubled }, children);
}
export default Component9479;
