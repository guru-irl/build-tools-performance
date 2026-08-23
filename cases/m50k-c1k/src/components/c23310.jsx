import React from 'react';
const LABEL_23310 = 'component_23310';
export function Component23310({ value = 23310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23310, 'data-value': derived.doubled }, children);
}
export default Component23310;
