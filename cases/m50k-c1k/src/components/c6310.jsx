import React from 'react';
const LABEL_6310 = 'component_6310';
export function Component6310({ value = 6310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6310, 'data-value': derived.doubled }, children);
}
export default Component6310;
