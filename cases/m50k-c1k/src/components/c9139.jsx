import React from 'react';
const LABEL_9139 = 'component_9139';
export function Component9139({ value = 9139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9139, 'data-value': derived.doubled }, children);
}
export default Component9139;
