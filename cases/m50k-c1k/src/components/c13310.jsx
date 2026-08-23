import React from 'react';
const LABEL_13310 = 'component_13310';
export function Component13310({ value = 13310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13310, 'data-value': derived.doubled }, children);
}
export default Component13310;
