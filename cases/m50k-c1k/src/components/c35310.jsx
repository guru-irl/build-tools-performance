import React from 'react';
const LABEL_35310 = 'component_35310';
export function Component35310({ value = 35310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35310, 'data-value': derived.doubled }, children);
}
export default Component35310;
