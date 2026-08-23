import React from 'react';
const LABEL_9627 = 'component_9627';
export function Component9627({ value = 9627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9627, 'data-value': derived.doubled }, children);
}
export default Component9627;
