import React from 'react';
const LABEL_9277 = 'component_9277';
export function Component9277({ value = 9277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9277, 'data-value': derived.doubled }, children);
}
export default Component9277;
