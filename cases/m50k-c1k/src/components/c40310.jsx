import React from 'react';
const LABEL_40310 = 'component_40310';
export function Component40310({ value = 40310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40310, 'data-value': derived.doubled }, children);
}
export default Component40310;
