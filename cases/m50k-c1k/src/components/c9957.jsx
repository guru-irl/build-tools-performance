import React from 'react';
const LABEL_9957 = 'component_9957';
export function Component9957({ value = 9957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9957, 'data-value': derived.doubled }, children);
}
export default Component9957;
