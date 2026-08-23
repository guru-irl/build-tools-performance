import React from 'react';
const LABEL_42310 = 'component_42310';
export function Component42310({ value = 42310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42310, 'data-value': derived.doubled }, children);
}
export default Component42310;
