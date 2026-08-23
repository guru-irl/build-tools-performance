import React from 'react';
const LABEL_9934 = 'component_9934';
export function Component9934({ value = 9934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9934, 'data-value': derived.doubled }, children);
}
export default Component9934;
