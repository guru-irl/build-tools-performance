import React from 'react';
const LABEL_36310 = 'component_36310';
export function Component36310({ value = 36310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36310, 'data-value': derived.doubled }, children);
}
export default Component36310;
