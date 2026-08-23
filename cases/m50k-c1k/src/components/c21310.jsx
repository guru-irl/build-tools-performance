import React from 'react';
const LABEL_21310 = 'component_21310';
export function Component21310({ value = 21310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21310, 'data-value': derived.doubled }, children);
}
export default Component21310;
