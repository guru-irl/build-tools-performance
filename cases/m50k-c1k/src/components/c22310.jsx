import React from 'react';
const LABEL_22310 = 'component_22310';
export function Component22310({ value = 22310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22310, 'data-value': derived.doubled }, children);
}
export default Component22310;
