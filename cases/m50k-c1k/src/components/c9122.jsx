import React from 'react';
const LABEL_9122 = 'component_9122';
export function Component9122({ value = 9122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9122, 'data-value': derived.doubled }, children);
}
export default Component9122;
