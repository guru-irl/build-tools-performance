import React from 'react';
const LABEL_14310 = 'component_14310';
export function Component14310({ value = 14310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14310, 'data-value': derived.doubled }, children);
}
export default Component14310;
