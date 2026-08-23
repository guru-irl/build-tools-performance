import React from 'react';
const LABEL_3310 = 'component_3310';
export function Component3310({ value = 3310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3310, 'data-value': derived.doubled }, children);
}
export default Component3310;
