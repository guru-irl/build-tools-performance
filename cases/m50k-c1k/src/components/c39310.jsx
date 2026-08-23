import React from 'react';
const LABEL_39310 = 'component_39310';
export function Component39310({ value = 39310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39310, 'data-value': derived.doubled }, children);
}
export default Component39310;
