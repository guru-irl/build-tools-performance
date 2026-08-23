import React from 'react';
const LABEL_9310 = 'component_9310';
export function Component9310({ value = 9310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9310, 'data-value': derived.doubled }, children);
}
export default Component9310;
