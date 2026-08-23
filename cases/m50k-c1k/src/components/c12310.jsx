import React from 'react';
const LABEL_12310 = 'component_12310';
export function Component12310({ value = 12310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12310, 'data-value': derived.doubled }, children);
}
export default Component12310;
