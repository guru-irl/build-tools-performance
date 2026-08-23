import React from 'react';
const LABEL_10310 = 'component_10310';
export function Component10310({ value = 10310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10310, 'data-value': derived.doubled }, children);
}
export default Component10310;
