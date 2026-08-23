import React from 'react';
const LABEL_9647 = 'component_9647';
export function Component9647({ value = 9647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9647, 'data-value': derived.doubled }, children);
}
export default Component9647;
